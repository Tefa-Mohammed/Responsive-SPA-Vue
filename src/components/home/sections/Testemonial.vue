<template>
  <div class="testemonial">
    <section class="pb-5">
      <section-header title="testemonial" />
      <div class="test">
        <div class="content">
          <i class="fas fa-quote-left"></i>
          <p>
            IronMass CrossFit Studio had me at a first fitness workout. It’s a
            truly inspiring team of fitness professionals. They are able to
            spread the love for what they teach to everyone. Their abilities &
            enthusiasm are just overwhelming!
          </p>
          <h5>SARAH O'MALLEY</h5>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SectionHeader from "../../SectionHeader.vue";

export default {
  name: "Testemonial",
  components: {
    SectionHeader,
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
.testemonial {
  overflow: hidden;
  section {
    background-color: #20232a;
    color: $whiteColor;
    .test {
      background: {
        image: url("../../../assets/home/cbb95225112f706b8f59fbf60fe30839_large-1280x510.jpg");
        position: center left;
        size: cover;
        repeat: no-repeat;
      }
      padding: 110px 0;
      @media screen and (max-width: 768px) {
        background-position: center top;
      }
      .content {
        i {
          color: $mainColor;
          font: {
            size: 2.2rem;
          }
        }
        h5 {
          font: {
            size: 1.4rem;
            weight: 600;
          }
          letter-spacing: 1.4px;
          color: $mainColor;
        }
        p {
          font: {
            size: 1.6rem;
            weight: 400;
          }
          letter-spacing: 1.4px;
          line-height: 1.6;
          margin: 35px auto;
          @media screen and (max-width: 768px) {
            width: 95%;
          }
        }
      }
    }
  }
}
</style>
