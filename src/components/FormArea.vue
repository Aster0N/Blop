<template>
	<div class="form-area" @focusin="onFocus">
		<label :for="area.input_id" class="area-label">
			<span class="area-label-span">{{ area.label_text }}</span>
		</label>
		<div class="input-warn-wrap">
			<input
				:type="area.input_type"
				class="area-input"
				:id="area.input_id"
				@blur="onBlur"
				@input="$emit('change', $event.target.value)"
			/>
			<div class="warn-message-wrap">
				<slot name="invalid-form-warning"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		area: Object,
		formModel: String,
	},
	model: {
		prop: "value",
		event: "change",
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
};
</script>
<style lang="scss" scoped>
.form-area {
	.input-warn-wrap {
		width: 440px;
		@include position(flex-end, center, column);

		.area-input {
			border-radius: 4px;
			box-sizing: border-box;
			outline: none;
			border: 2px solid transparent;
			cursor: text;
			display: block;
			overflow: auto;
			width: 100%;
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

		.warn-message-wrap {
			min-height: 20px;
			width: 100%;
			margin: 5px 0 0 0;
			@include position(flex-end, center, column);

			span {
				width: 100%;
				@include position(flex-end, center, "");
			}
		}
	}
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
}

.form-area.invalid .area-input {
	border: 1px solid #d63031;
	background-color: rgba(255, 255, 255, 0.7);
	animation: invalidInputAnim 0.1s ease 0s 1 normal;
}
@keyframes invalidInputAnim {
	0% {
		transform: translateX(-10px);
	}
	50% {
		transform: translateX(10px);
	}
	100% {
		transform: translateX();
	}
}
</style>