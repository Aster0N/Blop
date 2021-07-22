<template>
	<div class="menu-layout">
		<menu-header></menu-header>
		<router-view></router-view>
	</div>
</template>
<script>
import MenuHeader from "./MenuHeader.vue";
export default {
	components: {
		MenuHeader,
	},
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
.menu-layout {
	width: 100vw;
	position: fixed;
	top: 0;
}
</style>