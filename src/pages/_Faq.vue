<template>
	<div class="page faq-page">
		
		<div class="link-back-wrapper">
			<to-menu-link></to-menu-link>
		</div>
		this is faq page
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
.faq-page {
	flex: 1 1 auto;
	.link-back-wrapper {
		background-color: #000;
	}
}
</style>