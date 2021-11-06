<template>
  <div class="coachesPage">
    <div class="header py-4 text-left pl-2">
      coaches &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>
        <router-link to="/home">home / </router-link>
        coaches
      </span>
    </div>
    <div>
      <section-header title="our coaches" />
      <div class="img mb-5 py-5">
        <img
          src="../../assets/coaches/coaches_img_1.jpg"
          alt=""
          class="img-fluid"
        />
      </div>
    </div>
    <div class="team">
      <section-header title="our gym's team" class="mb-3" />
      <p>
        At ironmass we are growing as you, our attendees, do. In other words,
        our coaches are seasoning alongside you, while you go through the
        training course. Because regardless of how many years of experience a
        coach might have, there’s always a room for growth. Namely, getting each
        specific new attendee to his or her top shape adds some “achievement
        points” to coaches own skills.
      </p>
      <p>
        Our coaches and athletes are people who take both fitness and the
        CrossFit seriously. We want you to make tangible progress at the GYM! We
        always push even our own coaches to max out their knowledge, skills and
        strength.
      </p>
      <p>
        We achieve that by constantly upgrading our criteria of physical
        assessment, programs design, and nutrition. We see CrossFit as an
        evolving journey of the body and mind! In our view, CrossFit workouts
        help to connect mind, body, and spirit.
      </p>
      <div class="coach-card py-5">
        <div class="row">
          <div class="col-12 col-md-6 mb-4">
            <div class="row" style="background-color: #2b2e35">
              <div class="img1 col-12 col-lg-5">
                <span class="overlay"></span>
              </div>
              <div class="details col-12 col-lg-7">
                <h3>STEVEN AYOKEE</h3>
                <h6>OWNER / HEAD COACH</h6>
                <p>
                  12 Years ago I lost 80lbs with the help of a personal coach
                  and it completely changed my way of life. Since then, it’s
                  been my mission to sway other people to do CrossFit.
                </p>
                <div class="icons">
                  <span><i class="fab fa-facebook-f"></i></span>
                  <span><i class="fab fa-twitter"></i></span>
                  <span><i class="fab fa-linkedin-in"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="row">
              <div class="img2 col-12 col-lg-5">
                <span class="overlay"></span>
              </div>
              <div class="details col-12 col-lg-7">
                <h3>JULIE COLLINS</h3>
                <h6>COACH</h6>
                <p>
                  I initially took on CrossFit trainings after a spending a
                  lifetime in professional athletics. The fact that I loved
                  sports so much contributed a lot to my decision.
                </p>
                <div class="icons">
                  <span><i class="fab fa-facebook-f"></i></span>
                  <span><i class="fab fa-twitter"></i></span>
                  <span><i class="fab fa-linkedin-in"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="row">
              <div class="img3 col-12 col-lg-5">
                <span class="overlay"></span>
              </div>
              <div class="details col-12 col-lg-7">
                <h3>DOMINIC SNYDER</h3>
                <h6>COACH</h6>
                <p>
                  Growing up, I’ve always been involved in sports, fitness and
                  athleticism in general. It got a whole new meaning for me as
                  in 2007 I had an injury will serving.
                </p>
                <div class="icons">
                  <span><i class="fab fa-facebook-f"></i></span>
                  <span><i class="fab fa-twitter"></i></span>
                  <span><i class="fab fa-linkedin-in"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="row" style="background-color: #2b2e35">
              <div class="img4 col-12 col-lg-5">
                <span class="overlay"></span>
              </div>
              <div class="details col-12 col-lg-7">
                <h3>VIRGIL COOK</h3>
                <h6>COACH</h6>
                <p>
                  Virgil has been training amateur and professional combat
                  athletes since 1995. His skill-set expands to the following
                  combat styles: MMA fighting, Brazilian…
                </p>
                <div class="icons">
                  <span><i class="fab fa-facebook-f"></i></span>
                  <span><i class="fab fa-twitter"></i></span>
                  <span><i class="fab fa-linkedin-in"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
export default {
  components: { SectionHeader },
  name: "CoachesPage",
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
.coachesPage {
  background-color: #181a1f;
  overflow: hidden;
  .header {
    color: $whiteColor;
    font: {
      size: 1.7rem;
      weight: 500;
    }
    letter-spacing: 1.4px;
    text-transform: uppercase;
    span {
      font-size: 1rem;
      a {
        color: $mainColor;
        text-decoration: none;
      }
    }
  }
  .team {
    background-color: #20232a !important;
    color: $whiteColor;
    & > p {
      font: {
        size: 1.4rem;
        weight: 300;
      }
      letter-spacing: 1.4px;
      line-height: 1.6;
      color: #d3d3d3;
      margin-bottom: 45px;
      padding: 0 105px;
      @media screen and (max-width: 991px) {
        margin-bottom: 35px;
        padding: 0 95px;
      }
      @media screen and (max-width: 768px) {
        margin-bottom: 25px;
        padding: 0 55px;
      }
    }
    .coach-card {
      .row {
        background-color: #31343c;
        .details {
          text-align: left;
          padding: 35px 15px 35px 35px;
          h3 {
            font: {
              size: 2.1rem;
              weight: 600;
            }
            letter-spacing: 1.4px;
            text-transform: uppercase;
            margin-bottom: 25px;
          }
          h6 {
            color: $mainColor !important;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            margin-bottom: 25px;
            font-weight: 700;
          }
          p {
            font: {
              size: 1.6rem;
              weight: 300;
            }
            letter-spacing: 1.4px;
            line-height: 1.6;
          }
          .icons {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            margin: 20px 0;
            span {
              &:not(:last-of-type) {
                margin-right: 15px;
              }
              display: flex;
              justify-content: center;
              align-items: center;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              border: 2px solid $whiteColor;
              -webkit-transition: all 0.5s ease-in-out;
              -moz-transition: all 0.5s ease-in-out;
              transition: all 0.5s ease-in-out;
              cursor: pointer;
              position: relative;
              &:hover {
                i {
                  color: #000;
                }
              }
              &::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: $whiteColor;
                border-radius: 50%;
                transform: scale(0);
                -webkit-transition: all 0.5s ease-in-out;
                -moz-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
              }
              &:hover::after {
                transform: scale(1);
              }
              i {
                -webkit-transition: all 0.5s ease-in-out;
                -moz-transition: all 0.5s ease-in-out;
                transition: all 0.5s ease-in-out;
                color: $whiteColor;
                font-size: 1rem;
                z-index: 1;
              }
            }
          }
        }
        .img1 {
          background: {
            image: url("../../assets/home/home-coaches-img1.webp");
            position: center center;
            size: cover;
            repeat: no-repeat;
          }
          @media screen and (max-width: 991px) {
            background-position: center top;
            height: 300px;
          }
          @media screen and (max-width: 768px) {
            background-position: center top;
            height: 425px;
          }
          position: relative;
          &:hover .overlay {
            opacity: 0;
          }
        }
        .img2 {
          @extend .img1;
          background-image: url("../../assets/home/home-coaches-img2.webp");
        }
        .img3 {
          @extend .img1;
          background-image: url("../../assets/home/home-coaches-img3.webp");
        }
        .img4 {
          @extend .img1;
          background-image: url("../../assets/home/home-coaches-img4.webp");
        }
      }
      .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
        -webkit-transation: all 0.5s ease-in-out;
        -moz-transation: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
      }
    }
  }
}
</style>
