<template>
  <div class="footer">
    <section>
      <h2>GET OUR GYM'S SPECIAL OFFERS</h2>
      <h4>and the Latest CrossFit Tips and Tricks!</h4>
      <div class="form d-flex w-75 mx-auto my-5">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your e-mail address"
        />
        <button class="btn">submit</button>
      </div>
      <h2>LET'S STAY CONNECTED</h2>
      <div class="icons">
        <span><i class="fab fa-facebook-f"></i></span>
        <span><i class="fab fa-twitter"></i></span>
        <span><i class="fab fa-linkedin-in"></i></span>
        <span><i class="fab fa-instagram"></i></span>
        <span><i class="fab fa-pinterest-p"></i></span>
      </div>
    </section>
    <footer>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h2>ironmass</h2>
          <p>
            Regardless of what is your current shape now, after visiting our
            CrossFit sessions you will be at the top of your physical
            conditions!
          </p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h2>NAVIGATIONS</h2>
          <ul>
            <li><router-link to="/home">home</router-link></li>
            <li><router-link to="/classes">classes</router-link></li>
            <li><router-link to="/coaches">coaches</router-link></li>
            <li><router-link to="/blog">blog</router-link></li>
            <li><router-link to="/contacts">contact</router-link></li>
          </ul>
        </div>
        <div class="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h2>CONTACT INFORMATION</h2>
          <p>4096 N Highland St, Arlington, VA</p>
          <p>32101, USA</p>
          <h5>ironmass@demolink.org</h5>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <h2>WE ARE OPEN</h2>
          <p>Mon-Thu: 9:30 - 21:00</p>
          <p>Fri: 6:00 - 21:00</p>
          <p>Sat: 10:00 - 15:00</p>
        </div>
      </div>
    </footer>
    <div class="by w-100 text-center m-0 py-4">
      <p class="m-0">
        made with love by <span>abdellatif mohamed</span> at 3 / 11 / 2021 .
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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

.footer {
  overflow: hidden;
  section {
    background-color: #181a1f;
    padding: 100px;
    color: $whiteColor;
    h2 {
      letter-spacing: 1.4px;
      padding: 15px 0;
      font: {
        size: 2.5rem;
        wiehgt: 500;
      }
    }
    h4 {
      letter-spacing: 1.4px;
      padding: 15px 0;
      font: {
        size: 1.5rem;
        wiehgt: 500;
      }
    }
    .form {
      input {
        padding: 30px 20px;
        font-size: 1.2rem;
        letter-spacing: 1.3px;
        border-radius: 0 !important;
        &:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      }
      .btn {
        font: {
          size: 1.2rem;
          weight: 500;
        }
        text-transform: uppercase;
        letter-spacing: 1.3px;
        background-color: $mainColor !important;
        color: $whiteColor !important;
        border-radius: 0 !important;
        &:focus {
          outline: none !important;
          box-shadow: none !important;
        }
        &:hover {
          background-color: transparent !important;
          border: 3px solid $whiteColor !important;
        }
      }
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin: 15px auto;
      span {
        &:not(:last-of-type) {
          margin-right: 10px;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 3px solid $whiteColor;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        cursor: pointer;
        position: relative;
        @media screen and (max-width: 768px) {
          width: 55px;
          height: 55px;
        }
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
          font-size: 1.4rem;
          z-index: 1;
        }
      }
    }
  }
  footer {
    padding: 95px 20px;
    background-color: #2b2e35;
    color: $whiteColor;
    text-align: left;
    h2 {
      font: {
        size: 1.5rem;
        weight: 500;
      }
      letter-spacing: 1.5px;
      margin-bottom: 35px;
      text-transform: uppercase;
    }
    h5 {
      color: $mainColor;
      letter-spacing: 1.5px;
      font-weight: 600;
    }
    p {
      font: {
        size: 1.4rem;
        weight: 300;
      }
      letter-spacing: 1.5px;
      line-height: 1.6;
      color: #d3d3d3;
    }
    ul {
      li {
        list-style: none;
        margin-bottom: 15px;
        a {
          font: {
            size: 1.4rem;
            weight: 400;
          }
          letter-spacing: 1.5px;
          color: #d3d3d3;
          text-transform: uppercase;
          text-decoration: none;
          &.router-link-exact-active,
          &:hover {
            text-decoration: none;
            color: $mainColor;
          }
        }
      }
    }
  }
  .by {
    font: {
      size: 1.1rem;
      weight: 500;
    }
    letter-spacing: 1.5px;
    color: #d3d3d3;
    text-transform: uppercase;
    background-color: #20232a;
    span {
      color: $mainColor;
    }
  }
}
</style>
