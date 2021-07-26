<template>
	<div class="menu-header">
		<div class="layout-link">
			<router-link class="layout-home" :to="{ name: 'user-pages' }"
				>home
			</router-link>
		</div>

		<div
			class="layout-link layout-menu"
			v-if="
				this.$route.name == 'contacts' ||
				this.$route.name == 'vehicles' ||
				this.$route.name == 'rent' ||
				this.$route.name == 'company' ||
				this.$route.name == 'login'
			"
		>
			<to-menu-link></to-menu-link>
		</div>

		<div
			class="layout-link layout-reg-links"
			v-else-if="this.$route.name == 'registration'"
		>
			<to-menu-link></to-menu-link>
			<router-link class="layout-login" :to="{ name: 'login' }"
				>login</router-link
			>
		</div>
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
.menu-header,
.layout-reg-links {
	@include position(flex-start, center, "");
}
.layout-link {
	margin: 0 20px 0 0;
}
</style>