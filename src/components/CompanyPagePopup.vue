<template>
	<div class="popup" id="popup">
		<div class="popup-body">
			<div class="popup-content">
				<button class="popup-close" @click="closePopup">
					<span class="popup-close-span">
						<i class="material-icons">close</i>
					</span>
				</button>
				<div class="popup-title">
					<slot name="popup-title" id="popup-title"></slot>
				</div>
				<div class="popup-text">
					<slot name="popup-text"></slot>
				</div>
				<slot></slot>
			</div>
			<div class="closing-trigger" @click="closePopup"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		closePopup() {
			this.$emit("closePopup");
		},
	},
};
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	transition: all 0.5s ease;
	opacity: 0;
	visibility: hidden;
	cursor: pointer;
	overflow-x: hidden;
	overflow-y: auto;
	background-color: rgba(0, 0, 0, 0.8);
}
.popup.open {
	opacity: 1;
	visibility: visible;
}
.popup.open .popup-content {
	transform: perspective(800px) translate(0, 0);
}
.popup-body {
	min-height: 100vh;
	@include position(center, center, "");

	.popup-content {
		position: relative;
		background-color: #fff;
		max-width: 800px;
		padding: 20px 50px 20px 20px;
		@include font("Inter", 20px, regular, #000);
		z-index: 10;
		cursor: default;
		transition: all 0.5s ease;
		transform: perspective(700px) translate(80%, 0);

		.popup-close {
			position: absolute;
			top: 10px;
			right: 10px;
			margin: 0;
			padding: 3px;
			border: none;
			outline: none;
			background-color: transparent;
			cursor: pointer;

			.popup-close-span {
				@include position(center, center, "");
				width: 100%;
				height: 100%;
				color: rgb(60, 60, 60);
				transition: $buttonTransition;
				&:hover {
					color: #000;
				}
			}
		}
		.popup-title {
			@include font("Poppins", 40px, 500, #181818);
			margin: 0 0 15px 0;
		}
	}

	.closing-trigger {
		box-sizing: border-box;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.partners-wrapper {
		min-width: 600px;

		.partners-list {
			margin: 0;
			padding: 0 0 0 20px;
			list-style-type: none;

			.partners-list-item {
				position: relative;
				margin: 0 0 20px 0;
				&::before {
					content: "";
					display: block;
					position: absolute;
					top: 50%;
					left: -20px;
					width: 3px;
					height: 3px;
					border-radius: 50%;
					background-color: $secondary-color;
					transform: translateY(-50%);
				}
				.partners-list-link {
					width: 100%;
					height: 100%;
					text-decoration: underline;
					color: #000;
					transition: $buttonTransition;
					&:hover {
						color: rgb(0, 0, 0, 0.7);
						text-decoration-color: $secondary-color;
					}
				}
			}
		}
	}
}
</style>