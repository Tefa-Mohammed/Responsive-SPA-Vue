<template>
  <div>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
export default {
  name: "SectionHeader",
  props: {
    title: String,
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");

$mainColor: #fd3c3d;
$whiteColor: #fff;
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

h2 {
  letter-spacing: 1.3px;
  text-transform: uppercase;
  padding: 95px 0;
  position: relative;
  color: $whiteColor;
  font: {
    size: 2.5rem;
    weight: 600;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 70px;
    right: 50%;
    transform: translateX(50%);
    width: 180px;
    height: 5px;
    background-color: $mainColor;
    @media screen and (max-width: 991px) {
      bottom: 60px;
    }
    @media screen and (max-width: 768px) {
      bottom: 40px;
    }
  }
  @media screen and (max-width: 991px) {
    padding: 75px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 55px 0;
  }
}
</style>
