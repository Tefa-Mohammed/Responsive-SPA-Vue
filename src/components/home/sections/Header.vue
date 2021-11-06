<template>
  <header>
    <div>
      <h4>WELCOME TO</h4>
      <h1><span>IRON </span> MASS</h1>
      <h4>CROSSFIT STUDIO</h4>
      <p>
        Since our opening day back in 2013, our Gym classes have provided an
        inspiring welcoming for everybody! That makes every attendee feel like
        they are a part of one big and passionate community! With that in mind,
        you can always reach our fitness instructors for any kind of assistance.
        Their ultimate goal is to make you as fit and strong as only possible.
      </p>
      <button class="btn">get started today</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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

header {
  overflow: hidden;
  background: {
    image: url("../../../assets/home-img1.jpg");
    position: center center;
    size: cover;
    repeat: no-repeat;
  }
  @media screen and (max-width: 991px) {
    background-position: center left;
  }
  @media screen and (max-width: 768px) {
    background-size: contain;
    height: 57vh;
  }
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    color: $whiteColor;
    letter-spacing: 1.4px;
    line-height: 1.6;
    h4 {
      font: {
        size: 2.3rem;
        weight: 600;
      }
      margin: 0;
    }
    h1 {
      font: {
        size: 6.5rem;
        weight: 700;
      }
      margin: 0;
      span {
        color: $mainColor;
      }
    }
    p {
      margin: 45px auto;
      width: 60%;
      @media screen and (max-width: 768px) {
        display: none;
      }
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
      padding: 15px 10px !important;
      margin: 35px auto;
      &:focus {
        outline: none !important;
        box-shadow: none !important;
      }
      &:hover {
        background-color: $whiteColor !important;
        color: #000 !important;
      }
    }
    &::after {
      content: "";
      position: absolute;
      top: -30px;
      right: 50%;
      transform: translateX(50%);
      width: 180px;
      height: 5px;
      background-color: $mainColor;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
