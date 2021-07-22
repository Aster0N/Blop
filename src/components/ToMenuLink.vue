<template>
	<div class="to-menu-link">
		<router-link class="to-menu" :to="{ name: 'menu' }"> menu </router-link>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.to-menu-link {
	position: absolute;
	top: 0;
	left: 50px;
}
</style>