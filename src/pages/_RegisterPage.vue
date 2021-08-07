<template>
	<div class="page register-page">
		<log-reg-info-page @formSubmit="formSubmit">
			<template v-slot:form-title>
				<div class="form-title form-r-title">Register</div>
			</template>
			<template v-slot:form-areas>
				<form-area
					:area="registerContent.username"
					v-model.trim="form.username"
					:class="{
						invalid:
							($v.form.username.$dirty && !$v.form.username.required) ||
							($v.form.username.$dirty && !$v.form.username.minLength),
					}"
				>
					<template v-slot:invalid-form-warning>
						<span
							v-if="
								$v.form.username.$dirty && !$v.form.username.required
							"
							class="invalid-warning-message"
							>Enter your username</span
						>
						<span
							v-if="
								$v.form.username.$dirty && !$v.form.username.minLength
							"
							class="invalid-warning-message"
							>Field must have at least
							{{ $v.form.username.$params.minLength.min }}
							characters</span
						>
					</template>
				</form-area>
				<form-area
					:area="registerContent.email"
					v-model.trim="form.email"
					:class="{
						invalid:
							($v.form.email.$dirty && !$v.form.email.required) ||
							($v.form.email.$dirty && !$v.form.email.email),
					}"
				>
					<template v-slot:invalid-form-warning>
						<span
							v-if="$v.form.email.$dirty && !$v.form.email.required"
							class="invalid-warning-message"
							>The email field is required</span
						>
						<span
							v-if="$v.form.email.$dirty && !$v.form.email.email"
							class="invalid-warning-message"
							>Enter a valid email</span
						>
					</template>
				</form-area>
				<form-area
					:area="registerContent.password"
					v-model.trim="form.password"
					:class="{
						invalid:
							($v.form.password.$dirty && !$v.form.password.required) ||
							($v.form.password.$dirty && !$v.form.password.minLength) ||
							($v.form.password.$dirty && !$v.form.password.sameAs),
					}"
				>
					<template v-slot:invalid-form-warning>
						<span
							v-if="
								$v.form.password.$dirty && !$v.form.password.required
							"
							class="invalid-warning-message"
							>Enter the password</span
						>
						<span
							v-if="
								$v.form.password.$dirty && !$v.form.password.minLength
							"
							class="invalid-warning-message"
							>Field must have at least
							{{ $v.form.password.$params.minLength.min }}
							characters</span
						>
						<span
							v-if="$v.form.password.$dirty && !$v.form.password.sameAs"
							class="invalid-warning-message"
							>Passwords do not match</span
						>
					</template>
				</form-area>
				<form-area
					:area="registerContent.password_confirm"
					v-model.trim="form.passwordConfirm"
					:class="{
						invalid:
							($v.form.passwordConfirm.$dirty &&
								!$v.form.passwordConfirm.required) ||
							($v.form.passwordConfirm.$dirty &&
								!$v.form.passwordConfirm.minLength) ||
							($v.form.password.$dirty && !$v.form.password.sameAs),
					}"
				>
					<template v-slot:invalid-form-warning>
						<span
							v-if="
								$v.form.passwordConfirm.$dirty &&
								!$v.form.passwordConfirm.required
							"
							class="invalid-warning-message"
							>Confirm the password</span
						>
						<span
							v-if="
								$v.form.passwordConfirm.$dirty &&
								!$v.form.passwordConfirm.minLength
							"
							class="invalid-warning-message"
							>Field must have at least
							{{ $v.form.password.$params.minLength.min }}
							characters</span
						>
						<span
							v-if="$v.form.password.$dirty && !$v.form.password.sameAs"
							class="invalid-warning-message"
							>Passwords do not match</span
						>
					</template>
				</form-area>
			</template>
			<template v-slot:form-links>
				<button class="links-btn-action" id="signUp" type="submit">
					Sign Up
				</button>
				<router-link class="rout-to-lr" :to="{ name: 'login' }">
					Login
				</router-link>
			</template>
		</log-reg-info-page>
	</div>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
import LogRegInfoPage from "../components/LoginRegisterInfoPage.vue";
import FormArea from "../components/FormArea.vue";

export default {
	components: {
		LogRegInfoPage,
		FormArea,
	},
	validations: {
		form: {
			username: { required, minLength: minLength(2) },
			email: { email, required },
			password: {
				required,
				minLength: minLength(5),
				sameAs: sameAs("passwordConfirm"),
			},
			passwordConfirm: { required, minLength: minLength(5) },
		},
	},
	data() {
		return {
			registerContent: {
				username: {
					input_id: "area-username-input",
					input_type: "text",
					label_text: "Username",
				},
				email: {
					input_id: "area-email-input",
					input_type: "email",
					label_text: "Email",
				},
				password: {
					input_id: "area-pass-input",
					input_type: "password",
					label_text: "Password",
				},
				password_confirm: {
					input_id: "area-pass-confirm-input",
					input_type: "password",
					label_text: "Password confirm",
				},
			},
			form: {
				username: "",
				email: "",
				password: "",
				passwordConfirm: "",
			},
		};
	},
	methods: {
		formSubmit() {
			if (this.$v.$invalid) {
				this.$v.$touch();
				return;
			}
			this.$router.push("/");
		},
	},
};
</script>
<style lang="scss" scoped>
.invalid-warning-message {
	display: inline-block;
	@include font("Inter", 14px, 400, #d61c1c);
	cursor: default;
	pointer-events: none;
	user-select: none;
}
</style>