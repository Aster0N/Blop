<template>
  <div id="registered-user-page" class="user-page-r">
    <main-header></main-header>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";

export default {
  name: "registered-user",
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss" scoped>
.user-page-r {
  color: white;
  height: 100vh;
  background: url("https://i.ibb.co/nMW8jKZ/Close-front-view-of-a-red-race-car-on-a-track-High-resolution-3-D-render.jpg")
    no-repeat fixed center;
  background-size: cover;
}
</style>