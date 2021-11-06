<template>
  <div class="slider">
    <VueSlickCarousel v-bind="settings" class="carousel">
      <div class="work">
        <img src="../../../assets/home/home-slide-img1.jpg" class="img-fluid" />
        <div
          class="content"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="500"
        >
          <h2><span>IRON</span>MASS</h2>
          <h4>CROSSFIT STUDIO</h4>
          <h3>WE ARE A COMMUNITY!</h3>
          <p>
            We value teamwork and mutual assistance above everything else! While
            our coaches will be gladly helping your fitness growth at individual
            classes, you’ll also always find a fellowmen support, as our group
            training is limited to just 10 people…
          </p>
          <p>
            That is very different to big chain gyms with classes of tens… Our
            comradeship vibe is what makes training with us even more efficient!
          </p>
        </div>
      </div>
      <div class="work">
        <img
          src="../../../assets/home/home-slide-img2.webp"
          class="img-fluid"
        />
        <div class="content">
          <h2><span>IRON</span>MASS</h2>
          <h4>CROSSFIT STUDIO</h4>
          <p>
            Our facility offers an extensive place for your CrossFit and fitness
            practice. Across our 20,000 sq/ft gym space you’ll surely have more
            than enough room for maneuvering!
          </p>
          <p>
            Also, our downtown location is what makes us so appealing to so many
            people… Spacious area of that scale is more than enough both for
            group training as well as for the individual ones.
          </p>
        </div>
      </div>
      <div class="work">
        <img
          src="../../../assets/home/home-slide-img3.webp"
          class="img-fluid"
        />
        <div class="content">
          <h2><span>IRON</span>MASS</h2>
          <h4>CROSSFIT STUDIO</h4>
          <p>
            We take our attendees needs closely. Our gym is fully equipped with
            top notch tools and gears only
          </p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Slider",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: "true",
      },
    };
  },
};
</script>

<style lang="scss">
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

.slider {
  padding: 25px 0;
  background-color: $mainColor;
  .carousel {
    .slick-next {
      right: 0 !important;
      z-index: 2;
      background-color: $mainColor;
      width: 60px;
      height: 60px;
      opacity: 0 !important;
      @extend .smooth;
      &::before {
        content: "\f30b" !important;
        font-family: "Font Awesome 5 Free" !important;
        font: {
          size: 2rem;
          weight: 600;
        }
        color: $whiteColor !important;
        opacity: 1 !important;
        @extend .smooth;
      }
      &:hover {
        background-color: $whiteColor;
      }
      &:hover::before {
        color: #000 !important;
      }
    }
    .slick-prev {
      left: 0px !important;
      z-index: 2;
      background-color: $mainColor;
      width: 60px;
      height: 60px;
      opacity: 0 !important;
      @extend .smooth;
      &::before {
        content: "\f30a" !important;
        font-family: "Font Awesome 5 Free" !important;
        font: {
          size: 2rem;
          weight: 600;
        }
        color: $whiteColor !important;
        opacity: 1 !important;
        @extend .smooth;
      }
      &:hover {
        background-color: $whiteColor;
      }
      &:hover::before {
        color: #000 !important;
      }
    }
    &:hover .slick-next,
    &:hover .slick-prev {
      opacity: 1 !important;
    }
    .work {
      position: relative;
      .content {
        width: 50%;
        position: absolute;
        top: 20%;
        right: 0;
        color: $whiteColor;
        text-align: left;
        padding: 0 75px;
        letter-spacing: 1.4px;
        line-height: 1.6;
        @media screen and (max-width: 991px) {
          width: 60%;
        }
        @media screen and (max-width: 768px) {
          width: 70%;
        }
        h2 {
          font: {
            size: 4.7rem;
            weight: 600;
          }
          margin-bottom: 5px;
          span {
            color: $mainColor;
          }
        }
        h4 {
          margin-bottom: 65px;
          font-size: 2.1rem;
          text-shadow: 2px 3px 5px #000;
          @media screen and (max-width: 991px) {
            margin-bottom: 35px;
          }
        }
        h3 {
          font: {
            size: 2.2rem;
            weight: 600;
          }
          margin-bottom: 15px;
          text-shadow: 2px 3px 5px #000;
        }
        p {
          color: #d3d3d3;
          margin-bottom: 35px;
          text-shadow: 2px 3px 5px #000;
          @media screen and (max-width: 991px) {
            display: none;
          }
          font: {
            size: 1.3rem;
            weight: 400;
          }
        }
      }
    }
  }
}

.smooth {
  -webkit-transation: all 0.5s ease-in-out !important;
  -moz-transation: all 0.5s ease-in-out !important;
  transition: all 0.5s ease-in-out !important;
}
</style>
