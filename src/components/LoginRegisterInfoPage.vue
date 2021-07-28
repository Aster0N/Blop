<template>
	<div class="form-wrapper">
		<form class="form-body" @submit.prevent="">
			<div :class="lr_prop.form_title_class">
				{{ lr_prop.title }}
			</div>
			<div
				class="form-area"
				v-for="(area, index) in lr_prop.areas"
				:key="index"
			>
				<div :class="area.wrap_class" :id="area.wrap_id" @focusin="onFocus">
					<label :for="area.label_for" :class="area.label_class">
						<span :class="area.label_span_class">{{ area.name }}</span>
					</label>
					<input
						:type="area.input_type"
						:class="area.input_class"
						:id="area.input_id"
						required
						@blur="onBlur"
					/>
				</div>
			</div>
			<div
				class="form-body-links"
				v-for="(link, index) in lr_prop.formLinks"
				:key="index"
			>
				<button class="links-btn-action" :id="link.btn_id" type="submit">
					{{ link.user_action }}
				</button>
				<router-link class="rout-to-lr" :to="{ name: link.rout_name_page }">
					{{ link.rout_text }}
				</router-link>
			</div>
		</form>
	</div>
</template>

<script>
// === lr - login or register ===
export default {
	props: ["lr_prop"],
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

		.form-area {
			margin: 0 0 15px 0;
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