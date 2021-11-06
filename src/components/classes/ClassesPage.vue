<template>
  <div class="classes">
    <div class="header py-4 text-left pl-2">
      classes &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>
        <router-link to="/home">home / </router-link>
        classes
      </span>
    </div>
    <section-header title="crossfit classes" />
    <div class="row">
      <div class="col-12 col-md-8 mb-5 mb-md-0">
        <img
          src="../../assets/classes/crossfit_classes_img_1-ore3qnv1pmtp8zhzzkbywjw3uyji491cq2kezy3o54.jpg"
          alt=""
          class="img-fluid"
        />
        <div class="content">
          <h3>WHAT IS CROSSFIT?</h3>
          <p>
            CrossFit is a principal strength and conditioning program. it’s used
            by many serious, law enforcement and military institutions.
            Oftentimes it’s used at the police academies and in military special
            operations units. As well as by hundreds of other amateur and
            professional athletes worldwide.
          </p>
          <p>
            CrossFit is a universal fitness program. It includes everything to
            help you achieve the top of your shape.
          </p>
          <p>
            People we train will not necessarily be using their strengths on a
            regular basis. Still it provides a universal and a well-rounded
            course of training for anyone. CrossFit will be useful regardless of
            anyone’s station in life.
          </p>
          <p>
            Once again, the CrossFit program is designed for universal
            scalability.
          </p>
          <h3>PEOPLE WHOM WE WOULD RECOMMEND TAKING OUR CROSSFIT CLASSES:</h3>
          <ul>
            <li>Professional athletes, preparing for competitions</li>
            <li>Law enforcement officers, participating in an active duty</li>
            <li>Amateur athletes with a mid to long experience in fitness</li>
          </ul>
          <div class="price w-50 ml-auto my-5 rounded">
            <h4>pricing</h4>
            <ul>
              <li>1 – 5 sessions per month <span>$69.00</span></li>
              <li>5 – 15 sessions per month <span>$59.00</span></li>
              <li>
                15 – 30 sessions per month
                <span>$49.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <img
          src="../../assets/classes/crossfit_classes_img_2-ore3qnuuftjl2yilpth9m6q1ri55ttjvi66m6jifug.jpg"
          alt=""
          class="img-fluid w-100"
        />
        <div class="content">
          <h3>CROSSFIT CLASS COACH</h3>
          <h6>STEVEN AYOKEE – OWNER/HEAD COACH</h6>
          <p>
            12 Years ago I lost 80lbs with the help of a personal coach and it
            completely changed my way of life. Since then, it’s been my mission
            to influence other people to start taking CrossFit classes. To begin
            improving their health and strength the performance!
          </p>
          <p>
            My belief is that if the workout is easy, it’s not a good workout
            then. A real workout should always be challenging and exhausting.
            I’ve always been known as one of the toughest coaches. With my end
            goal in mind, such severity is aimed to help you! Because this tough
            love will get you accomplishing something you thought you could
            never do.
          </p>
          <p>That’s where the value of the CrossFit comes to.</p>
          <p>
            The process of getting closer to that goal is actually the least
            enjoyable experience…
          </p>
          <p>
            So keep in mind, that since the moment you walk into my GYM you
            become my client, whether you decide to join or not.
          </p>
        </div>
      </div>
    </div>
    <div class="advice">
      <p>YOU SHOULD TOO INTERESTED IN MAKING YOURSELF <span>MORE FIT</span></p>
    </div>
    <section class="py-5">
      <section-header title="latest photos from our gym" />
      <div class="classes-gallery">
        <div>
          <img
            src="../../assets/classes/latest_photos_img_1.jpg"
            alt=""
            class="img-fluid"
          />
          <span class="overlay">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
        <div>
          <img
            src="../../assets/classes/latest_photos_img_2.jpg"
            alt=""
            class="img-fluid"
          />
          <span class="overlay">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
        <div>
          <img
            src="../../assets/classes/latest_photos_img_3.jpg"
            alt=""
            class="img-fluid"
          />
          <span class="overlay">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
        <div>
          <img
            src="../../assets/classes/latest_photos_img_4.jpg"
            alt=""
            class="img-fluid"
          />
          <span class="overlay">
            <i class="fab fa-instagram"></i>
          </span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";

export default {
  name: "ClassesPage",
  components: { SectionHeader },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");

$mainColor: #fd3c3d;
$whiteColor: #fff;
html,
body {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
.classes {
  background-color: #181a1f;
  overflow: hidden;
  color: $whiteColor;
  .header {
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
  .row {
    text-align: left;
    img {
      border-bottom: 6px solid $mainColor;
    }
    .content {
      background-color: #2b2e35;
      padding: 65px 35px 50px 35px;
      @media screen and (max-width: 991px) {
        padding: 50px 25px 30px 25px;
      }
      h3 {
        font: {
          size: 2.1rem;
          weight: 500;
        }
        letter-spacing: 1.4px;
        line-height: 1.5;
        margin-bottom: 35px;
        text-shadow: 2px 3px 5px #000;
        @media screen and (max-width: 991px) {
          margin-bottom: 25px;
        }
      }
      h6 {
        color: $mainColor;
        font-weight: 500;
      }
      p {
        color: #d3d3d3;
        font: {
          size: 1.4rem;
          weight: 300;
        }
        letter-spacing: 1.4px;
        line-height: 1.6;
        margin-bottom: 30px;
        @media screen and (max-width: 991px) {
          margin-bottom: 20px;
        }
      }
      ul {
        li {
          color: #d3d3d3;
          font: {
            size: 1.2rem;
            weight: 300;
          }
          letter-spacing: 1.4px;
          margin-bottom: 10px;
        }
      }
      .price {
        padding: 25px 35px;
        background-color: $mainColor;
        color: $whiteColor;
        h4 {
          font-weight: 500;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          margin-bottom: 15px;
          text-shadow: 2px 3px 5px #000;
        }
        ul li {
          font-weight: 400;
          margin-bottom: 15px;
          letter-spacing: 1.4px;
          span {
            font-weight: 700;
            text-shadow: 2px 3px 5px #000;
          }
        }
      }
    }
  }
  .advice {
    object-fit: contain;
    height: 60vh;
    text-align: left;
    padding: 75px;
    margin: 105px 0;
    background: {
      image: url("../../assets/classes/crossfit_classes_img_4.webp");
      position: center right;
      size: cover;
      repeat: no-repeat;
    }
    p {
      font: {
        size: 3.4rem;
        weight: 600;
      }
      letter-spacing: 1.4px;
      line-height: 1.6;
      text-shadow: 2px 3px 5px #000;
      span {
        color: $mainColor;
      }
    }
  }
  section {
    background-color: #20232a;
    text-align: center;
    .classes-gallery {
      width: 100%;
      display: flex;
      @media screen and (max-width: 991px) {
        flex-wrap: wrap;
      }
      div {
        height: 350px;
        margin: 20px auto;
        img {
          height: 100% !important;
          width: 100% !important;
          object-fit: cover;
        }
        position: relative;
        &:hover .overlay {
          opacity: 1;
        }
        .overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
          -webkit-transation: all 0.5s ease-in-out;
          -moz-transation: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
          opacity: 0;
          i {
            color: #fff;
            font-size: 3.4rem;
          }
        }
      }
    }
  }
}
</style>
