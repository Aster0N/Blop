<template>
  <div class="menu-layout">
    <router-link 
        class="menu-layout-link"
        :to="{ name: 'user-pages' }"
        >на главную
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
// here can be a header component
export default {
  data() {
    return{}
  }
};
</script>
<style lang="scss" scoped>
.menu-layout {
  position: fixed;
  top: 0;
}
</style>