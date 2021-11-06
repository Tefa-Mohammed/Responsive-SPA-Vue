<template>
  <div class="program">
    <section class="pb-5">
      <section-header title="our programs" />
      <div class="row px-0 mx-0">
        <div class="col-12 col-md-6 col-lg-3 px-0 mx-0 my-card">
          <img :src="pic1" alt="" class="img-fluid w-100" />
          <div class="content">
            <p>basic crossfit</p>
            <button class="btn">program details</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-0 mx-0 my-card">
          <img :src="pic2" alt="" class="img-fluid w-100" />
          <div class="content">
            <p>fitness studio</p>
            <button class="btn">program details</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-0 mx-0 my-card">
          <img :src="pic3" alt="" class="img-fluid w-100" />
          <div class="content">
            <p>yoga classes</p>
            <button class="btn">program details</button>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 px-0 mx-0 my-card">
          <img :src="pic4" alt="" class="img-fluid w-100" />
          <div class="content">
            <p>personal training</p>
            <button class="btn">program details</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SectionHeader from "../../SectionHeader.vue";
export default {
  name: "Program",
  components: {
    SectionHeader,
  },
  data() {
    return {
      pic1: "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img1.jpg",
      pic2: "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img2.jpg",
      pic3: "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img3.jpg",
      pic4: "https://ld-wp73.template-help.com/wordpress/prod_470/v2/wp-content/uploads/2019/07/home-programs-img4.jpg",
    };
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
.program {
  overflow: hidden;
  section {
    background-color: #181a1f;
    color: $whiteColor;
    .my-card {
      position: relative;
      -webkit-transation: all 0.5s ease-in-out;
      -moz-transation: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 5px;
        background-color: $mainColor;
        opacity: 0;
        -webkit-transation: all 0.5s ease-in-out;
        -moz-transation: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
      }
      &:hover {
        -webkit-transform: scale(1.05);
        -moz-transform: scale(1.05);
        transform: scale(1.05);
        z-index: 1;
      }
      &:hover::before {
        opacity: 1;
      }
      .content {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        text-align: center;
        p {
          font: {
            size: 3.2rem;
            weight: 600;
          }
          line-height: 1.1;
          letter-spacing: 1.5px;
          padding: 35px 5px;
          text-transform: uppercase;
        }
        button {
          width: 300px !important;
          color: $whiteColor !important;
          background-color: rgba($color: #000000, $alpha: 0.7) !important;
          -webkit-transation: all 0.5s ease-in-out !important;
          -moz-transation: all 0.5s ease-in-out !important;
          transition: all 0.5s ease-in-out !important;
          font: {
            size: 1.4rem !important;
            weight: 500 !important;
          }
          text-transform: uppercase;
          letter-spacing: 1.4px;
          outline: none !important;
          border-radius: 0 !important;
          padding: 10px 5px !important;
          margin: 35px auto;
          border: 3px solid $whiteColor !important;
          &:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          &:hover {
            background-color: $whiteColor !important;
            color: #000000 !important;
          }
        }
      }
    }
  }
}
</style>
