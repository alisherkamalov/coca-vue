<script setup lang="ts">
import { PerspectiveCamera, Scene, WebGLRenderer, Color, AnimationMixer, Clock, AmbientLight, DirectionalLight } from 'three';
import { ref, onMounted, onUnmounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const experience = ref<HTMLCanvasElement | null>(null);
const scene = new Scene();
scene.background = new Color(0xffffff);

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

const ambientLight = new AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

const clock = new Clock();
let mixer: AnimationMixer;

let renderer: WebGLRenderer;

const resizeRenderer = () => {
  if (experience.value) {
    const width = experience.value.clientWidth;
    const height = experience.value.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
};

onMounted(() => {
  if (experience.value) {
    renderer = new WebGLRenderer({ canvas: experience.value });
    resizeRenderer();

    window.addEventListener('resize', resizeRenderer);

    const loader = new GLTFLoader();
    loader.load(new URL('@/assets/cube.glb', import.meta.url).href, (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      mixer = new AnimationMixer(model);
      gltf.animations.forEach((clip) => {
        mixer.clipAction(clip).play();
      });

      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

        // Rotate the cube around its Y-axis
        model.rotation.y += delta;

        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('An error occurred:', error);
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeRenderer);
});
</script>

<template>
  <div class='root-div'>
    <canvas ref="experience" id="canvas" style="width: 100%; height: 100%;"></canvas>
  </div>
</template>
<style scoped>
    .root-div {
        height: 500px;
        max-width: 300px; 
        min-width: 300px; 
        max-height: 400px; 
        left: 10px;
        justify-content: center;
    }
</style>
