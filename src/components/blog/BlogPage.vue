<template>
  <div class="blogPage">
    <div class="header py-4 text-left pl-2">
      blog &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span>
        <router-link to="/home">home / </router-link>
        blog
      </span>
    </div>
    <div class="container m-auto py-5">
      <div class="row">
        <div class="col-12 col-md-4 mb-5 mb-md-0">
          <article>
            <h3>RECENT POSTS</h3>
            <p>
              Restoring Strength and Getting Back to CrossFit After Pregnancy
            </p>
            <p>If My Last Day of CrossFit Were Tomorrow…</p>
            <p>
              Weightlifting Program Plan: Be Flexible With the Prescriptions
            </p>
          </article>
          <article>
            <h3>RECENT COMMENTS</h3>
          </article>
          <article>
            <h3>ARCHIVES</h3>
            <p>July 2019</p>
          </article>
          <article>
            <h3>CATEGORIES</h3>
            <ul>
              <li>coach</li>
              <li>gym</li>
              <li>Uncategorized</li>
            </ul>
          </article>
        </div>
        <div class="col-12 col-md-8 pl-0 pl-md-5">
          <ul>
            <li
              @click="activeTap = 1"
              :class="[activeTap === 1 ? 'active' : '']"
            >
              coach
            </li>
            <li
              @click="activeTap = 2"
              :class="[activeTap === 2 ? 'active' : '']"
            >
              gym
            </li>
            <li
              @click="activeTap = 3"
              :class="[activeTap === 3 ? 'active' : '']"
            >
              Uncategorized
            </li>
          </ul>
          <div class="one" v-if="activeTap === 1">
            <button class="btn">Uncategorized</button>
            <p>By adminPosted July 31, 2019</p>
            <h3>
              Restoring Strength and Getting Back to CrossFit After Pregnancy
            </h3>
            <p>
              There are millions of ways on how to compose good weightlifting
              workout programs. Some coaches stay true to few basic plans on
              such training. They simply tweak them to be fit for different
              skills and experience levels. But we are sticking to quite a
              different plan. We put our focus...
            </p>
          </div>
          <div class="two" v-if="activeTap === 2">
            <button class="btn">gym</button>
            <p>By adminPosted July 31, 2019Tags: GYM, Lifting, Training</p>
            <h3>
              Weightlifting Program Plan: Be Flexible With the Prescriptions
            </h3>
            <p>
              There are millions of ways on how to compose good weightlifting
              workout programs. Some coaches stay true to few basic plans on
              such training. They simply tweak them to be fit for different
              skills and experience levels. But we are sticking to quite a
              different plan. We put our focus...
            </p>
          </div>
          <div class="three" v-if="activeTap === 3">
            <button class="btn">coach</button>
            <p>By adminPosted July 31, 2019Tags: Coach, Yoga</p>
            <h3>If My Last Day of CrossFit Were Tomorrow…</h3>
            <p>
              There are millions of ways on how to compose good weightlifting
              workout programs. Some coaches stay true to few basic plans on
              such training. They simply tweak them to be fit for different
              skills and experience levels. But we are sticking to quite a
              different plan. We put our focus...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPage",
  data() {
    return {
      activeTap: 1,
    };
  },
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

.blogPage {
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
  .container {
    text-align: left;
    .row div:first-of-type {
      article {
        border-bottom: 2px solid $whiteColor;
        padding: 35px 0;
        h3 {
          font: {
            size: 1.4rem;
            weight: 500;
          }
          letter-spacing: 1.4px;
          margin-bottom: 25px;
          text-transform: uppercase;
        }
        p {
          color: #d3d3d3;
          letter-spacing: 1.4px;
          line-height: 1.7;
          margin-bottom: 15px;
          font: {
            size: 1.1rem;
            weight: 300;
          }
        }
        ul {
          list-style: none;
          li {
            font: {
              size: 1.1rem;
              weight: 300;
            }
            color: #d3d3d3;
            letter-spacing: 1.4px;
            margin-bottom: 10px;
            text-transform: uppercase;
            width: fit-content;
            cursor: pointer;
            -webkit-transition: all 0.5s ease-in-out;
            -moz-transition: all 0.5s ease-in-out;
            transition: all 0.5s ease-in-out;
            &:hover {
              color: $mainColor;
            }
          }
        }
      }
    }
    .row div:last-of-type {
      ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 35px;
        margin-bottom: 35px;
        li {
          font: {
            size: 1.3rem;
            weight: 500;
          }
          text-shadow: 2px 3px 5px #000;
          color: #d3d3d3;
          letter-spacing: 1.4px;
          margin-bottom: 10px;
          text-transform: uppercase;
          width: fit-content;
          cursor: pointer;
          -webkit-transition: all 0.5s ease-in-out;
          -moz-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
          &.active,
          &:hover {
            color: $mainColor;
          }
        }
      }
      .one {
        background: {
          image: url("../../assets/blog/608242-1280x510-1170x510.jpg");
          position: center center;
          size: cover;
          repeat: no-repeat;
        }
        padding: 45px 65px;
        margin-bottom: 55px;
        filter: drop-shadow(7px 8px 7px #000);
        object-fit: contain;
        button {
          margin-bottom: 45px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          font: {
            size: 1.2rem;
            weight: 500;
          }
          padding: 7px 10px;
          border-radius: 0;
          background-color: $mainColor !important;
          color: $whiteColor !important;
        }
        p,
        h3 {
          text-shadow: 2px 3px 5px #000;
        }
      }
      .two {
        @extend .one;
        background-image: url("../../assets/blog/cbb95225112f706b8f59fbf60fe30839_large-1280x510-1170x510.jpg");
      }
      .three {
        @extend .one;
        background-image: url("../../assets/blog/fitness-gym-girl-barbell-J769-1280x510-1170x510.jpg");
      }
    }
  }
}
</style>
