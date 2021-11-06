<template>
  <div id="navbar">
    <img :src="pic" :alt="title" />
    <div class="side-bar" ref="openNav">
      <nav>
        <router-link to="/home">home</router-link>
        <router-link to="/classes">classes</router-link>
        <router-link to="/coaches">coaches</router-link>
        <router-link to="/blog">blog</router-link>
        <router-link to="/contacts">contacts</router-link>
      </nav>
      <div class="navIcons">
        <span><i class="fab fa-facebook-f"></i></span>
        <span><i class="fab fa-twitter"></i></span>
        <span><i class="fab fa-linkedin-in"></i></span>
        <span><i class="fab fa-instagram"></i></span>
        <span><i class="fab fa-pinterest-p"></i></span>
      </div>
    </div>
    <span class="side-icon" @click="addNavActive()">
      <i class="fas fa-bars" ref="sideBarIcon"></i>
    </span>
    <transition name="slide-fade">
      <div class="toTop" @click="scrollToTop()" v-show="showIcon > 500">
        <i class="fas fa-chevron-up"></i>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      pic: "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/logo.png",
      title: "LOGO",
      showIcon: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    onScroll(e) {
      this.showIcon = e.target.documentElement.scrollTop;
      console.log({ top: this.showIcon });
    },
    addNavActive() {
      console.log("open navbar");
      this.$refs.openNav.classList.toggle("navActive");
      if (this.$refs.openNav.classList.contains("navActive")) {
        this.$refs.sideBarIcon.classList.add("fa-times");
        this.$refs.sideBarIcon.classList.remove("fa-bars");
      } else {
        this.$refs.sideBarIcon.classList.remove("fa-times");
        this.$refs.sideBarIcon.classList.add("fa-bars");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");

$mainColor: #fd3c3d;
$whiteColor: #fff;
#app {
  text-align: center;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $mainColor;
  padding: 0px 20px;
  font-family: "Montserrat", sans-serif;
  position: relative;
  right: 0;
  left: 0;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 991px) {
    padding: 15px 20px;
  }
  .side-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    @media screen and (max-width: 991px) {
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0px;
      left: 0px;
      background-color: $mainColor;
      clip-path: polygon(0px 0px, 100% 0px, 100% 0px, 0px 0px);
      border-top: 0.2rem solid rgba(255, 255, 255, 0.2);
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      box-shadow: 2px 1px 0px 1px rgb(85, 83, 83);
      padding: 30px 0;
    }
    nav {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $mainColor;
      @media screen and (max-width: 991px) {
        flex-direction: column;
      }
      a {
        padding: 15px 0;
        text-decoration: none;
        font: {
          size: 1rem;
          weight: 600;
        }
        color: $whiteColor;
        border: solid transparent;
        border-width: 0 0 4px 0;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        &:not(:last-of-type) {
          margin-right: 35px;
          @media screen and (max-width: 991px) {
            margin-right: 0px;
          }
        }
        &.router-link-exact-active,
        &:hover {
          border: solid $whiteColor;
          border-width: 0 0 4px 0;
          text-decoration: none;
          color: $whiteColor;
        }
        @media screen and (max-width: 991px) {
          padding: 10px 0;
          margin-bottom: 15px;
          font-size: 1.3rem;
        }
      }
    }
    .navIcons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      span {
        &:not(:last-of-type) {
          margin-right: 8px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        &:hover {
          background-color: $whiteColor;
          i {
            color: #000;
          }
        }
        i {
          -webkit-transition: all 0.5s ease-in-out;
          -moz-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
          color: $whiteColor;
          font-size: 1.1rem;
        }
      }
    }
  }
  .side-icon {
    display: none;
    @media screen and (max-width: 991px) {
      display: block;
    }
    i {
      cursor: pointer;
      font-size: 1.8rem;
      color: $whiteColor;
    }
  }
  .toTop {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: $mainColor;
    position: fixed;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 99;
    i {
      color: $whiteColor;
      font-size: 1.9rem;
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
@media screen and (max-width: 991px) {
  .navActive {
    clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%) !important;
  }
}
</style>
