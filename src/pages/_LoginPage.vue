<template>
	<div class="page login-page">
		<log-reg-info-page @formSubmit="formSubmit">
			<template v-slot:form-title>
				<div class="form-title form-l-title">Login</div>
			</template>
			<template v-slot:form-areas>
				<form-area
					:area="loginContent.content_email"
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
					:area="loginContent.content_password"
					v-model.trim="form.password"
					:class="{
						invalid:
							($v.form.password.$dirty && !$v.form.password.required) ||
							($v.form.password.$dirty && !$v.form.password.minLength),
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
					</template>
				</form-area>
			</template>
			<template v-slot:form-links>
				<button class="links-btn-action" id="signIn" type="submit">
					Sign In
				</button>
				<router-link class="rout-to-lr" :to="{ name: 'registration' }">
					Registration
				</router-link>
			</template>
		</log-reg-info-page>
	</div>
</template>
<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import LogRegInfoPage from "../components/LoginRegisterInfoPage.vue";
import FormArea from "../components/FormArea.vue";

export default {
	components: {
		LogRegInfoPage,
		FormArea,
	},
	validations: {
		form: {
			email: { email, required },
			password: { required, minLength: minLength(5) },
		},
	},
	data() {
		return {
			loginContent: {
				content_email: {
					input_id: "area-email-input",
					input_type: "email",
					label_text: "Email",
				},
				content_password: {
					input_id: "area-pass-input",
					input_type: "password",
					label_text: "Password",
				},
			},
			form: {
				email: "",
				password: "",
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