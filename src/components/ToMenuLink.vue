<template>
	<div class="to-menu-link">
		<router-link class="to-menu" :to="{ name: 'menu' }">menu</router-link>
	</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.to-menu-link {
	height: 50px;
	@include position(flex-start, center, "");
	.to-menu {
		height: 100%;
		padding: 0 20px;
		text-align: center;
		text-decoration: none;
		transition: $buttonTransition;
		@include font("Jost", 20px, 400, #fff);
		@include position(center, center, "");
		&:hover {
			background-color: $primary-color;
		}
	}
}
</style>