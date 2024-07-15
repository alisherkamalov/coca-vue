<template>
  <nav>
    <div class="nav-pc">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="nav2">
        <h5 class="home"><a href="/">Home</a></h5>
        <h5 class="about"><a href="about">About</a></h5>
        <h5 class="blog"><a href="blog">Blog</a></h5>
        <h5 class="pricing"><a href="pricing">Pricing</a></h5>
      </div>
      <div class="contactdiv">
        <h5 class="contacth5"><a href="contact">Contact Us -></a></h5>
      </div>
    </div>
    <div class="nav-mob">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <Slide :isOpen="isOpen" @closeMenu="isOpen = false">
        <img src="../assets/logo.png" />
        <h5 class="home-mob"><a href="/">Home</a></h5>
        <h5 class="about-mob"><a href="about">About</a></h5>
        <h5 class="blog-mob"><a href="blog">Blog</a></h5>
        <h5 class="pricing-mob"><a href="pricing">Pricing</a></h5>
        <h5 class="contact-mob"><a href="contact">Contact Us</a></h5>
      </Slide>
      
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

<style lang=css>
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
  .nav-mob {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    padding: 10px 20px;
  }
  .logo {
    width: 25px;
    height: 25px;
    padding-left: 15px;
    scale: 0.9;
    margin-top: 11.5px;
  }
  .nav-pc {
    display: none;
  }
  div.burger-menu {
    margin-bottom: 12.5px;
    margin-left: 100px;
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
}
div.bm-burger-button {
  width: 36px;
  height: 30px;
  left: 185px;
  top: 36px;
  display: flex;
  justify-content: right;
  cursor: pointer;
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
div.bm-item-list {
  color: white;
  margin-left: 10%;
  font-size: 20px;
}
div.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
div.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}

</style>
