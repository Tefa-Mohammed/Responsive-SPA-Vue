<template>
  <div>
    <Header />
    <Program />
    <Coaches />
    <Posts />
    <Testemonial />
    <Gallery />
    <Slider />
  </div>
</template>

<script>
import Coaches from "./sections/Coaches.vue";
import Gallery from "./sections/Gallery.vue";
import Header from "./sections/Header.vue";
import Posts from "./sections/Posts.vue";
import Program from "./sections/Program.vue";
import Slider from "./sections/Slider.vue";
import Testemonial from "./sections/Testemonial.vue";

export default {
  components: {
    Header,
    Program,
    Coaches,
    Posts,
    Testemonial,
    Gallery,
    Slider,
  },
  name: "HomePage",
};
</script>

<style scoped lang="scss"></style>
