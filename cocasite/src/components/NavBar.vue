<template>
  <nav>
    <div class="nav-pc">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="nav2">
        <h5 class="home"><a href="/">Home</a></h5>
        <h5 class="about"><router-link to="/about">About</router-link></h5>
        <h5 class="blog"><router-link to="/blog">Blog</router-link></h5>
        <h5 class="pricing"><router-link to="/pricing">Pricing</router-link></h5>
      </div>
      <div class="contactdiv">
        <h5 class="contacth5"><router-link to="/contact">Contact Us -></router-link></h5>
      </div>
    </div>
    <div class="nav-mob">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="burger-container">
        <Slide :isOpen="isOpen" @closeMenu="isOpen = false">>
          <img src="../assets/logo.png" />
          <h5 class="home-mob"><router-link to="/">Home</router-link></h5>
          <h5 class="about-mob"><router-link to="/about">About</router-link></h5>
          <h5 class="blog-mob"><router-link to="/blog">Blog</router-link></h5>
          <h5 class="pricing-mob"><router-link to="/pricing">Pricing</router-link></h5>
          <h5 class="contact-mob"><router-link to="/contact">Contact Us</router-link></h5>
        </Slide>
      </div>
    </div>
  </nav>
</template>
<script>
import { Slide } from 'vue3-burger-menu'
export default {
    components: {
        Slide // Register your component
    },
    name: "NavBar",
    data () {
      return {
        isOpen: false
    };
      
    },
};
</script>
<style>
@media (min-width: 921px) {
  a {
    color: black;
    text-decoration: none;
  }
  .nav-mob {
    display: none;
  }
  .nav-pc {
    width: 100%;
    height: 75px;
    opacity: 0.8;
    display: flex;
    align-items: center;
  }
  .logo {
    width: 25px;
    height: 25px;
    padding-left: 25px;
    scale: 0.9;
    margin-bottom: 35px;
  }
  
  .nav2 {
    display: flex;
    justify-content: right;
    width: 100%;
  }
  
  .about {
    margin-right: 25px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
  
  .blog {
    margin-right: 25px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
  
  .home {
    margin-right: 25px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
  
  .pricing {
    margin-right: 35px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
  
  .contactdiv {
    border-bottom: 2px solid grey;
    width: 140px;
    height: 20px;
    margin-right: 125px;
  }
  
  .contacth5 {
    margin-bottom: 15px;
    width: 100%;
    padding-left: 5px;
    padding-bottom: 125px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
  
  .nav1 {
    width: 100%;
    height: 500px;
  }
}

@media (max-width: 920px) {
  .nav {
    max-width: 100%;
  }
  div.nav-mob {
    display: flex;
    
    width: 100px;
    height: 45px;
    padding: 10px 20px;
  }
  .logo {
    width: 25px;
    height: 25px;
    scale: 0.9;
    margin-top: 5px;
  }
  .nav-pc {
    display: none;
  }
  .burger-container {
    margin-left: auto;
  }
  a {
    margin-right: 25px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: grey;
    text-decoration: none;
  }
  
  h5.blog-mob {
    margin-right: 25px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: grey;
  }
  
  h5.home-mob {
    margin-right: 25px;
    font-weight: 500;
    color: grey;
    font-family: "Inter", sans-serif;
  }
  
  h5.pricing-mob {
    margin-right: 35px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: grey;
  }
  h5.contact-mob {
    margin-right: 35px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: grey;
    width: 200px;
  }
}
div.bm-burger-button {
  width: 36px;
  height: 30px;
  left: 150px;
  top: 25px;
}
div.bm-burger-bars {
  background-color: white;
}
div.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
div.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
div.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
  margin-right: 25px;
  margin-top: 25px;
}
div.bm-menu {
  background-color: white;
  padding-top: 0px;
}


div.bm-overlay {
  background: white;
}
nav.bm-item-list {
  color: white;
  margin-left: 10%;
  font-size: 20px;
}
nav.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
  color: white;
}
nav.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

</style>