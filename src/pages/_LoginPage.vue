<template>
	<div class="page login-page">
		<log-reg-info-page :lr_prop="logRegContent"></log-reg-info-page>
		<!-- <div class="l-wrapper-container">
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
		</div> -->
	</div>
</template>
<script>
import LogRegInfoPage from "../components/LoginRegisterInfoPage.vue";
export default {
	components: {
		LogRegInfoPage,
	},
	data() {
		return {
			logRegContent: {
				title: "Login",
				form_title_class: ["form-title", "form-l-title"],
				areas: [
					{
						area_key: "ID_EMAIL-LOGIN",
						name: "Email",
						wrap_class: "area-email",
						wrap_id: "loginEmail",
						// label tag
						label_for: "area-email-input",
						label_class: "area-label",
						// label > span tag
						label_span_class: "area-label-span",
						//input tag
						input_type: "email",
						input_class: "area-input",
						input_id: "area-email-input",
					},
					{
						area_key: "ID_PASSWORD-LOGIN",
						name: "Password",
						wrap_class: "area-password",
						wrap_id: "loginPassword",
						// label tag
						label_for: "area-pass-input",
						label_class: "area-label",
						// label > span tag
						label_span_class: "area-label-span",
						// input tag
						input_type: "password",
						input_class: "area-input",
						input_id: "area-pass-input",
					},
				],
				formLinks: [
					{
						// btn tag
						button_key: "ID-BTN-SIGN-IN-LOGIN",
						btn_id: "signIn",
						user_action: "Sign In",
						// router to another page tag
						rout_name_page: "registration",
						rout_text: "Registration",
					},
				],
			},
		};
	},
};
</script>
