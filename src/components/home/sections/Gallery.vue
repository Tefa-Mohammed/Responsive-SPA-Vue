<template>
  <div class="gallery py-5">
    <div>
      <img
        src="../../../assets/home/home-coaches-img1.webp"
        alt=""
        class="img-fluid"
      />
      <span class="overlay">
        <i class="fab fa-instagram"></i>
      </span>
    </div>
    <div>
      <img
        src="../../../assets/home/latest_photos_img_2.jpg"
        alt=""
        class="img-fluid"
      />
      <span class="overlay">
        <i class="fab fa-instagram"></i>
      </span>
    </div>
    <div>
      <img
        src="../../../assets/home/home-programs-img3.webp"
        alt=""
        class="img-fluid"
      />
      <span class="overlay">
        <i class="fab fa-instagram"></i>
      </span>
    </div>
    <div>
      <img
        src="../../../assets/home/latest_photos_img_3.jpg"
        alt=""
        class="img-fluid"
      />
      <span class="overlay">
        <i class="fab fa-instagram"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Gallery",
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.gallery {
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;
  background-color: #fd3c3d;
  div {
    height: 350px;
    margin: 20px 0;
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
</style>
