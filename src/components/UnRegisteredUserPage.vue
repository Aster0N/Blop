<template>
  <div id="unregistered-user-page" class="user-page-ur">
    <main-header></main-header>
    <div class="menu-cursor-pc" id="cursor"></div>
  </div>
</template>

<script>
import MainHeader from "../pages/MainHeader.vue";

export default {
  name: "unregistered-user",
  components: {
    MainHeader,
  },
  data() {
    return {};
  },
  mounted() {
    let wrapperPage = document.getElementById("unregistered-user-page");
    let menuLink = document.getElementById("wrapDecorMenu"); // from MainHeader
    let mainHeaderLogo = document.getElementById("mainHeaderLogo");
    let mouseCursor = document.getElementById("cursor");
    mouseCursor.style.display = "none"; // to hide cursor in start position (left top page corner)

    function cursor(e) {
      mouseCursor.style.display = "inline";
      if (e.pageX < window.innerWidth && e.pageY < window.innerHeight) {
        mouseCursor.style.top = e.pageY - 5 + "px";
        mouseCursor.style.left = e.pageX - 5 + "px";
      } else {
        mouseCursor.style.display = "none";
      }

      // turn on animation
      if (e.target == menuLink || e.target == mainHeaderLogo) {
        mouseCursor.classList.add("cursorActiveColor");
        mouseCursor.classList.add("cursor-filter");
      }
    }
    // turn off animation
    function cursorSimpleColor() {
      mouseCursor.classList.remove("cursorActiveColor");
      mouseCursor.classList.remove("cursor-filter");
    }

    wrapperPage.addEventListener("mousemove", (e) => cursor(e));
    menuLink.addEventListener("mouseleave", (e) => cursorSimpleColor(e));
    mainHeaderLogo.addEventListener("mouseleave", (e) => cursorSimpleColor(e));
  },
};
</script>

<style lang="scss" scoped>
.user-page-ur {
  cursor: none;
  height: 100vh;
  background: url("https://i.ibb.co/FmX3zb9/f1.jpg") no-repeat fixed center;
}

.menu-cursor-pc {
  height: 15px;
  width: 15px;
  transition: border, transform 0.2s cubic-bezier(0.59, -0.67, 0.6, 1.67);
  transform-origin: center;
  border-radius: 50%;
  border: 2px solid #052730;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  transform: translate(-20%, -20%);
  z-index: 999;
  @include position(center, center);
}
.menu-cursor-pc.cursor-filter {
  backdrop-filter: hue-rotate(120deg);
}
.menu-cursor-pc.cursorActiveColor {
  transform: scale(1.8);
  border: 3px solid $secondary-color;
}
</style>