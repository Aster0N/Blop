<template>
	<div class="menu-header">
		<div class="layout-links">
			<router-link
				class="menu-header-link layout-to-home"
				:to="{ name: 'user-pages' }"
				>home
			</router-link>
		</div>

		<div
			class="layout-links layout-menu"
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

		<div class="layout-links" v-else-if="this.$route.name == 'registration'">
			<to-menu-link></to-menu-link>
			<router-link
				class="menu-header-link layout-to-login"
				:to="{ name: 'login' }"
				>login</router-link
			>
		</div>
		<div class="layout-links" v-if="this.$route.name == 'become-premium'">
			<to-menu-link></to-menu-link>
			<router-link
				class="menu-header-link layout-to-company"
				:to="{ name: 'company' }"
				>our company
			</router-link>
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
.menu-header {
	@include position(flex-start, center, "");
	height: 50px;
	background-color: #2c3c63;
	.layout-links {
		height: 100%;
		@include position(flex-start, center, "");
		.menu-header-link {
			height: 100%;
			padding: 0 20px;
			text-decoration: none;
			transition: $buttonTransition;
			@include font("Jost", 20px, 400, #fff);
			@include position(center, center, "");
			&:hover {
				background-color: $primary-color;
			}
		}
	}
}
</style>