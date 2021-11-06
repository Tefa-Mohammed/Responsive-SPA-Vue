<template>
  <div class="posts">
    <section class="pb-5">
      <section-header title="MOST RECENT FITNESS POSTS" />
      <div class="row">
        <div class="col-12 col-lg-4 my-card img1">
          <div class="content">
            <p>
              Restoring Strength and Getting Back to CrossFit After Pregnancy
            </p>
            <h6>Posted by admin</h6>
            <h6>July 31, 2019</h6>
            <button class="btn">read more</button>
          </div>
        </div>
        <div class="col-12 col-lg-4 my-card img2">
          <div class="content">
            <p>If My Last Day In Training of CrossFit Were Tomorrow…</p>
            <h6>Posted by admin</h6>
            <h6>July 31, 2019</h6>
            <button class="btn">read more</button>
          </div>
        </div>
        <div class="col-12 col-lg-4 my-card img3">
          <div class="content">
            <p>
              Weight lifting Program Plan: Be Flexible With the Prescriptions
            </p>
            <h6>Posted by admin</h6>
            <h6>July 31, 2019</h6>
            <button class="btn">read more</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SectionHeader from "../../SectionHeader.vue";

export default {
  name: "Posts",
  components: {
    SectionHeader,
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

.posts {
  overflow: hidden;

  section {
    background-color: #181a1f;
    color: $whiteColor;
    .my-card {
      .content {
        z-index: 1;
        background-color: rgba($color: #000000, $alpha: 0.5);
        width: 100%;
        height: 100%;
        padding: 110px 95px 90px 95px;
        p {
          font: {
            size: 2.5rem;
            weight: 600;
          }
          line-height: 1.2;
          text-align: center;
          margin-bottom: 25px;
          letter-spacing: 1.4px;
          cursor: pointer;
          -webkit-transation: all 0.5s ease-in-out !important;
          -moz-transation: all 0.5s ease-in-out !important;
          transition: all 0.5s ease-in-out !important;
          &:hover {
            color: $mainColor;
          }
        }
        h6 {
          font: {
            size: 1.1rem;
            weight: 400;
          }
          letter-spacing: 1.4px;
          margin-bottom: 8px;
        }
        button {
          color: $whiteColor !important;
          background-color: $mainColor !important;
          -webkit-transation: all 0.5s ease-in-out !important;
          -moz-transation: all 0.5s ease-in-out !important;
          transition: all 0.5s ease-in-out !important;
          font: {
            size: 1.2rem !important;
            weight: 600 !important;
          }
          text-transform: uppercase;
          letter-spacing: 1.3px;
          outline: none !important;
          border-radius: 0 !important;
          padding: 10px 15px !important;
          margin: 30px auto;
          &:focus {
            outline: none !important;
            box-shadow: none !important;
          }
          &:hover {
            background-color: $whiteColor !important;
            color: #000 !important;
          }
        }
      }
    }
    .img1 {
      background: {
        image: url("../../../assets/home/608242-1280x510.jpg");
        position: center center;
        size: cover;
        repeat: no-repeat;
      }
    }
    .img2 {
      @extend .img1;
      background-image: url("../../../assets/home/home-testimonials-img.jpg");
    }
    .img3 {
      @extend .img1;
      background-image: url("../../../assets/home/fitness-gym-girl-barbell-J769-1280x510.jpg");
    }
  }
}
</style>
