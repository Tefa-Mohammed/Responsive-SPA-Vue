<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 991px) {
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 11px;
  }
}
</style>
