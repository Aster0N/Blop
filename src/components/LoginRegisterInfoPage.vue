<template>
	<div class="form-wrapper">
		<form class="form-body" @submit.prevent="formSubmit" novalidate>
			<slot name="form-title"></slot>
			<div class="form-area">
				<slot name="form-areas"></slot>
			</div>
			<div class="form-body-links">
				<slot name="form-links"></slot>
			</div>
			<slot></slot>
		</form>
	</div>
</template>

<script>
// === lr - login or register ===
export default {
	data() {
		return {};
	},
	methods: {
		formSubmit() {
			this.$emit("formSubmit");
		},
	},
};
</script>
<style lang="scss" scoped>
.form-wrapper {
	padding: 200px 0 0 0;
	@include position(center, "", "");

	.form-body {
		position: relative;
		min-width: 600px;
		padding: 40px 0 40px 40px;
		background-color: rgba(#000, 0.4);
		border: 1px solid rgba(#000, 0.41);

		.form-title {
			position: absolute;
			@include position(center, center, "");
			width: 335px;
			height: 100px;
			top: -80px;
			left: 40px;
			@include font("Poppins", 48px, bold, #000);
		}
		.form-l-title {
			background-color: $primary-color;
		}
		.form-r-title {
			background-color: $secondary-color;
		}

		.form-body-links {
			@include position(space-between, center, row);
			padding: 15px 0 0 0;
			width: 40%;
			.links-btn-action {
				cursor: pointer;
				display: inline-block;
				padding: 8px;
				min-width: 150px;
				background-color: $light-color;
				@include font("Jost", 24px, bold, #000);
				text-align: center;
				border: none;
				transition: $buttonTransition;
				&:hover {
					background-color: rgba($light-color, 0.8);
					transform: translateY(-2px);
				}
			}
			.rout-to-lr {
				display: inline-block;
				padding: 8px;
				@include font("Jost", 20px, medium, #fff);
				border-bottom: 1px solid transparent;
				transition: $buttonTransition;
				&:hover {
					color: rgb(40, 40, 40);
					text-decoration-color: $light-color;
				}
			}
		}
	}
}
</style>