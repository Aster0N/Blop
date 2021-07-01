<template>
  <div id="unregistered-user-page" class="user-page-ur">
    <main-header></main-header>
    <div class="user-page-info-ur">
      <div class="info-ur">
        <div class="info-title-ur">Vehicle rental</div>
        <div class="info-sub-title-ur">
          A modern transport rental system that is already widespread almost all
          over the world.
        </div>
      </div>
      <button class="info-button-ur" id="getStartedBtn">Get started -></button>
      <!-- add arrow -->
    </div>
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
    let startBtn = document.getElementById("getStartedBtn");
    mouseCursor.style.display = "none"; // to hide cursor in start position (left top page corner)
    // turn on animation
    function animateCursor(e, element) {
      if (e.target == element) {
        mouseCursor.classList.add("cursorActiveColor");
        mouseCursor.classList.add("cursor-filter");
      }
    }
    // turn off animation
    function offAnimationCursor() {
      mouseCursor.classList.remove("cursorActiveColor");
      mouseCursor.classList.remove("cursor-filter");
    }
    function cursor(e) {
      mouseCursor.style.display = "inline";
      if (e.pageX < window.innerWidth && e.pageY < window.innerHeight) {
        mouseCursor.style.top = e.pageY - 5 + "px";
        mouseCursor.style.left = e.pageX - 5 + "px";
      } else {
        mouseCursor.style.display = "none";
      }
      animateCursor(e, menuLink);
      animateCursor(e, mainHeaderLogo);
    }

    startBtn.addEventListener("mousemove", (e) => {
      animateCursor(e, startBtn);
    });
    startBtn.addEventListener("mouseleave", () => offAnimationCursor());
    wrapperPage.addEventListener("mousemove", (e) => cursor(e));
    menuLink.addEventListener("mouseleave", () => offAnimationCursor());
    mainHeaderLogo.addEventListener("mouseleave", () => offAnimationCursor());
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
  @include position(center, center, "");
}
.menu-cursor-pc.cursor-filter {
  backdrop-filter: hue-rotate(120deg);
}
.menu-cursor-pc.cursorActiveColor {
  transform: scale(1.8);
  border: 3px solid $secondary-color;
}
.user-page-info-ur {
  background-color: rgba(0, 0, 0, 0.4);
  width: 720px;
  margin: 50px 0 0 0;
  padding: 80px 40px;
  @include position(center, stretch, column);

  .info-ur {
    user-select: none;
    padding: 0 0 30px 0;
    .info-title-ur {
      @include font("Poppins", 64px, 700, #fff);
      padding: 0 0 20px 0;
    }
    .info-sub-title-ur {
      @include font("Inter", 24px, 200, #fff);
    }
  }
  .info-button-ur {
    display: block;
    max-width: 550px;
    padding: 25px 125px;
    background-color: rgba($primary-color, 0.4);
    border: none;
    @include position(center, center, "");
    @include font("Jost", 30px, 400, #fff);
    letter-spacing: 2px;
    transition: $buttonTransition;

    &:hover {
      cursor: none;
      background-color: rgba($primary-color, 0.5);
    }
  }
}
</style>