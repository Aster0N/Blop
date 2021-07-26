<template>
	<div class="menu-layout">
		<menu-header></menu-header>
		<div class="router-wrapper">
			<router-view></router-view>
		</div>
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
.router-wrapper {
	overflow: auto;
	padding: 10px 0;
	height: 100vh;
}
</style>