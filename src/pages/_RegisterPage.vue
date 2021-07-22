<template>
	<div class="page register-page">
		<router-link class="reg-back-to-log-link" :to="{ name: 'login' }"
			>back to login</router-link
		>
		<to-menu-link> </to-menu-link>
		<h1>register page</h1>
	</div>
</template>

<script>
import ToMenuLink from "../components/ToMenuLink.vue";
export default {
	components: {
		ToMenuLink,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.register-page {
	border: 1px solid rgb(59, 24, 255);
	.reg-back-to-log-link {
		position: absolute;
		top: 0;
		left: 100px;
	}
}
</style>