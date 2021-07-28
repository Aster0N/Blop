<template>
	<div class="page register-page">
		<log-reg-info-page :lr_prop="logRegContent"></log-reg-info-page>
		<!-- <div class="r-wrapper-container">
			<form class="r-container-body" @submit.prevent="">
				<div class="r-container-title">Register</div>
				<div class="r-body-areas">
					<div class="r-area-email" id="registerEmail" @focusin="onFocus">
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
						class="r-area-password"
						id="registerPassword"
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
				<div class="r-body-links">
					<button class="sign-up-btn" id="signUp" type="submit">
						Sign Up
					</button>
					<router-link class="login-page-link" :to="{ name: 'login' }">
						Back to login
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
				title: "Register",
				form_title_class: ["form-title", "form-r-title"],
				areas: [
					{
						name: "Username",
						wrap_class: "area-username",
						wrap_id: "username",
						// label tag
						label_for: "area-username-input",
						label_class: "area-label",
						// label > span tag
						label_span_class: "area-label-span",
						//input tag
						input_type: "text",
						input_class: "area-input",
						input_id: "area-username-input",
					},
					{
						name: "Email",
						wrap_class: "area-email",
						wrap_id: "registerEmail",
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
						name: "Password",
						wrap_class: "area-password",
						wrap_id: "registerPassword",
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
					{
						name: "Password confirmation",
						wrap_class: "area-password-confirm",
						wrap_id: "registerPassword-confirm",
						// label tag
						label_for: "area-pass-confirm-input",
						label_class: "area-label",
						// label > span tag
						label_span_class: "area-label-span",
						// input tag
						input_type: "password",
						input_class: "area-input",
						input_id: "area-pass-confirm-input",
					},
					// Password confirmation
				],
				formLinks: [
					{
						// btn tag
						btn_id: "signUp",
						user_action: "Sign Up",
						// router to another page tag
						rout_name_page: "login",
						rout_text: "Login",
					},
				],
			},
		};
	},
};
</script>