<template>
  <div class="contactPage">
    <div class="header py-4 text-left pl-2">
      contacts &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>
        <router-link to="/home">home / </router-link>
        contacts
      </span>
    </div>
    <section-header title="our location" />
    <h3>JOIN THE BEST GYM IN YOUR TOWN!</h3>
    <p>11559 Ventura Boulevard Studio City, CA 91604</p>
    <h5><span>Phone : </span>0 109 473 8864</h5>
    <GmapMap
      v-bind:center="center"
      v-bind:zoom="7"
      style="width: 100%; height: 500px; margin: 50px 0"
    >
      <gmap-marker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
      ></gmap-marker>
    </GmapMap>

    <section>
      <section-header title="contact us tody!" />
      <p>
        WE ARE SURE THAT THIS DECISION WILL AFFECT YOUR LIFE IN A POSITIVE WAY.
      </p>
      <p>SO WHY WAITING? SIGN UP FOR OUR COURSES TODAY</p>
      <div class="form">
        <div class="mb-5">
          <label for="name" class="mb-2">Your Name :</label>
          <input type="text" id="name" class="form-control" />
        </div>
        <div class="mb-5">
          <label for="email" class="mb-2">Your E-mail :</label>
          <input type="email" id="email" class="form-control" />
        </div>
        <div class="mb-5">
          <label for="review" class="mb-2">Your Review :</label>
          <textarea
            name=""
            id="review"
            cols="30"
            rows="10"
            class="form-control"
          ></textarea>
        </div>
        <button class="btn">submit</button>
      </div>
    </section>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
export default {
  name: "ContactPage",
  components: { SectionHeader },
  data() {
    return {
      center: { lat: 50.0, lng: 10.0 },
      markers: [
        {
          position: { lat: 50.0, lng: 10.0 },
        },
        {
          position: { lat: 50.0, lng: 11.0 },
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
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

.contactPage {
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
  h3 {
    color: $whiteColor;
    letter-spacing: 1.4px;
    margin-bottom: 25px;
    font-size: 2.3rem;
  }
  p {
    color: #d3d3d3;
    font: {
      size: 1.4rem;
      weight: 300;
    }
    margin-bottom: 15px;
    letter-spacing: 1.4px;
  }
  h5 {
    color: #d3d3d3;
    letter-spacing: 1.4px;
    font: {
      size: 1.4rem;
    }
    span {
      color: $mainColor;
    }
  }
  section {
    background-color: #20232a;
    padding: 35px 0;
    p {
      text-align: center;
      font-weight: 500;
      font-size: 1.7rem;
      color: $whiteColor;
      line-height: 1.6;
      letter-spacing: 1.4px;
      margin-bottom: 5px;
    }
    p:last-of-type {
      margin-bottom: 45px;
    }
    .form {
      width: 70%;
      color: $whiteColor;
      width: 50%;
      margin: 30px auto;
      text-align: left;
      label,
      input,
      textarea {
        font: {
          size: 1.1rem !important;
          weight: 500 !important;
        }
        letter-spacing: 1.4px !important;
      }
      input,
      textarea,
      button {
        padding: 5px 15px !important;
        border-radius: 0 !important;
        &:focus {
          box-shadow: none !important;
          outline: none !important;
        }
      }
      button {
        background-color: $mainColor !important;
        color: $whiteColor !important;
        padding: 10px 15px !important;
        letter-spacing: 1.4px !important;
        border-radius: 0 !important;
        text-transform: uppercase !important;
        font: {
          size: 1.3rem !important;
          weight: 500 !important;
        }
        &:hover {
          background-color: $whiteColor !important;
          color: #000 !important;
        }
      }
    }
  }
}
</style>
