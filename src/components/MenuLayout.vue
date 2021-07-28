<template>
	<div class="menu-layout">
		<menu-header></menu-header>
		<div
			class="router-wrapper"
			:class="{ padding_on: !(this.$route.name == 'menu') }"
		>
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
	box-sizing: border-box;
	overflow: auto;
	height: 100vh;
}
.padding_on {
	padding: 10px 0 0 0;
}
</style>