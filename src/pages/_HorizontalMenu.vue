<template>
  <div class="menu-container" id="menu-content">
    <div class="menu-wrapper">
      <ul class="menu-list">
        <li class="list-item list-item-1">
          <router-link class="list-link" :to="{ name: 'login' }"
            >login / register</router-link
          >
        </li>
        <li class="list-item list-item-2">
          <router-link class="list-link" :to="{ name: 'vehicles' }"
            >vehicles</router-link
          >
        </li>
        <li class="list-item list-item-3">
          <router-link class="list-link" :to="{ name: 'rent' }"
            >rent</router-link
          >
        </li>
        <li class="list-item list-item-4">
          <router-link class="list-link" :to="{ name: 'company' }"
            >our company</router-link
          >
        </li>
        <li class="list-item list-item-5">
          <router-link class="list-link" :to="{ name: 'contacts' }"
            >contacts</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      move_coef: 2,
      move_left_coef: 1,
      onResize() {
        console.log(this.move_coef);
        
        // todo a media queries with js down below (нужно увеличивать значение переменной move_left_coef)
        // if (window.innerWidth <= 1820) {
        //   this.move_coef = 14;
        // } else if (window.innerWidth > 1820) {
        //   this.move_coef = 2;
        // }
      },
    };
  },
  mounted() {
    var moving_coefficient = this.move_coef;
    var move_to_left = this.move_left_coef;
    $(document).ready(function () {
      var usageWidth = $(".menu-wrapper").width(),
        slidesWidth = $("#menu-content").width(),
        // rangeX = slidesWidth - usageWidth,
        $images = $(".list-item");

      $(".menu-wrapper").on("mousemove", function (e) {
        var mouseX = e.pageX,
          offset =
            (mouseX / usageWidth) * slidesWidth - mouseX / moving_coefficient / move_to_left;
        $images.css({
          "-webkit-transform": "translate3d(" + -offset + "px,0,0)",
          transform: "translate3d(" + -offset + "px,0,0)",
        });
      });
    });
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped lang="scss">
.menu-container {
  height: 100vh;
  @include position(flex-start, center);
  overflow: hidden;
}
.menu-wrapper {
  width: 50%;
  height: 100%;
  @include position("", center);

  .menu-list {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    list-style: none;
    padding: 0;

    .list-item {
      height: 200px;
      transition: transform 0.1s ease;
    }
    .list-link {
      @include position(center, center);
      width: 100%;
      height: 100%;
      padding: 0 200px;
      @include font("Poppins", 6em, 900, transparent);
      -webkit-text-stroke: 2px #000;
      text-decoration: none;
      white-space: nowrap;
    }
  }
}
</style>