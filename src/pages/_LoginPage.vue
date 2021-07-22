<template>
	<div class="page login-page">
		<to-menu-link></to-menu-link>
		<div class="l-wrapper-container">
			<form class="l-container-body" @submit.prevent="">
				<div class="l-container-title">Login</div>
				<div class="l-body-areas">
					<div class="l-area-email" id="loginEmail" @focusin="onFocus">
						<label for="area-email-input" class="area-label">
							<span class="area-label-span">Email</span>
						</label>
						<input
							type="email"
							class="area-input"
							id="area-email-input"
							required
							@blur="onBlur"
						/>
					</div>
					<div
						class="l-area-password"
						id="loginPassword"
						@focusin="onFocus"
					>
						<label for="area-pass-input" class="area-label">
							<span class="area-label-span">Password</span>
						</label>
						<input
							type="password"
							class="area-input"
							id="area-pass-input"
							required
							@blur="onBlur"
						/>
					</div>
				</div>
				<div class="l-body-links">
					<button class="sign-in-btn" id="signIn" type="submit">
						Sign In
					</button>
					<router-link
						class="register-page-link"
						:to="{ name: 'registration' }"
					>
						Registration
					</router-link>
				</div>
			</form>
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
	methods: {
		onFocus(e) {
			let el = e.target;
			let labelSpan = document
				.querySelector(`[for='${el.id}']`)
				.querySelector(".area-label-span");
			labelSpan.classList.add("label_focus");
			el.classList.add("input_focus");
		},
		onBlur(e) {
			let el = e.target;
			let labelSpan = document
				.querySelector(`[for='${el.id}']`)
				.querySelector(".area-label-span");
			labelSpan.classList.remove("label_focus");
			el.classList.remove("input_focus");
		},
	},
	mounted() {},
};
</script>
<style lang="scss" scoped>
.login-page {
	.l-wrapper-container {
		height: 100vh;
		@include position(center, center, "");

		.l-container-body {
			position: relative;
			min-width: 700px;
			padding: 40px 0 40px 40px;
			background-color: rgba(#000, 0.4);
			border: 1px solid rgba(#000, 0.41);

			.l-container-title {
				position: absolute;
				@include position(center, center, "");
				width: 335px;
				height: 100px;
				top: -80px;
				left: 40px;
				background-color: $primary-color;
				@include font("Poppins", 48px, bold, #000);
			}

			.l-body-areas {
				.area-label {
					display: inline-block;
					cursor: pointer;
					margin: 0 0 10px 0;
					padding: 5px;
					.area-label-span {
						transition: color ease 0.3s;
						@include font("Inter", 18px, bold, #fff);
					}
					.area-label-span.label_focus {
						color: #000;
					}
				}

				.area-input {
					margin: 0 0 15px 0;
					cursor: text;
					display: block;
					overflow: auto;
					width: 440px;
					height: 50px;
					padding: 5px;
					background-color: rgba(#fff, 0.4);
					border: 1px solid rgba(#000, 0.41);
					@include font("Inter", 16px, regular, rgba(0, 0, 0, 0.8));
					transition: background ease 0.3s;

					&:hover {
						background-color: rgba(#fff, 0.5);
					}
					&.input_focus {
						background-color: rgba(#fff, 0.5);
					}
				}
			}

			.l-body-links {
				@include position(flex-start, center, row);
				.sign-in-btn {
					cursor: pointer;
					display: inline-block;
					min-width: 150px;
					background-color: $light-color;
					@include font("Jost", 24px, bold, #000);
					text-align: center;
					border: none;
					padding: 8px;
				}
				.register-page-link {
					margin: 0 0 0 40px;
					@include font("Jost", 20px, medium, #fff);
				}
			}
		}
	}
}
</style>