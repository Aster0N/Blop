<template>
	<div class="page vehicles-page">
		<div class="_container">
			<div class="vehicles-title _page-title">Vehicles</div>
			<div class="vehicle-slider-wrapper">
				<div class="info-slider-wrapper">
					<div class="info-slider" id="infoSlider">
						<div class="info-slider-item">
							<div class="content-text"></div>
						</div>
						<div class="info-slider-item">
							<div class="content-text"></div>
						</div>
						<div class="info-slider-item">
							<div class="content-text"></div>
						</div>
					</div>
					<div class="slider-dots" id="infoSlickDots"></div>
				</div>
				<div class="img-slider">
					<div class="slider-body"></div>
					<div
						class="slider-controls _controls-vehicles"
						id="sliderControls"
					>
						<button class="slider-btn slider-prev-btn">
							<img src="../assets/img/arrow_prev_wh.svg" alt="prev" />
						</button>
						<button class="slider-btn slider-next-btn">
							<img src="../assets/img/arrow_next_wh.svg" alt="next" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import $ from "jquery";
import "../assets/js/slick.min.js";

export default {
	data() {
		return {};
	},
	mounted() {
		$("#infoSlider").slick({
			arrows: false,
			dots: true,
			appendDots: $(".slider-dots"),
			vertical: true,
			autoplay: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			touchMove: false,
			mobileFirst: false,
			easing: "ease",
			autoplaySpeed: 4000,
			touchThreeshold: 3, // for mobile
			cssEase: "ease",
		});
		$(".slider-prev-btn").click(function () {
			$("#infoSlider").slick("slickPrev");
		});
		$(".slider-next-btn").click(function () {
			$("#infoSlider").slick("slickNext");
		});
		let infoSliderDotsUl = document.querySelector(".slick-dots");
		let infoSliderDotsLi = document.querySelectorAll("#infoSlickDots li");
		let infoSliderDots = document.querySelector(".slider-dots");
		let slickList = document.querySelector(".slick-list");
		let slickTrack = document.querySelector(".slick-track");
		const dotsWidth = 10;

		slickList.style.height = 100 + "%";
		slickTrack.style.height = 100 + "%";
		infoSliderDots.style.cssText = `
			width: ${dotsWidth}px;
			position: absolute;
			right: ${dotsWidth + 10}px;
			top: 50%;
			transform: translateY(-50%);

		`;
		infoSliderDotsUl.style.cssText = `
			width: ${dotsWidth}px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 0;
			margin: 0;
		`;
		for (let i = 0; i < infoSliderDotsLi.length; i++) {
			let el = infoSliderDotsLi[i];
			el.style.cssText = `
				box-sizing: border-box;
				width: ${dotsWidth}px;
				height: ${dotsWidth}px;
				background-color: #606d73;
				border-radius: 50%;
				margin: 10px;
				font-size: 0;
			`;
			el.childNodes[0].style.cssText = `
				display: none;
				visibility: hidden;
				pointer-events: none;
			`;
		}
	},
};
</script>
<style lang="scss" scoped>
.vehicle-slider-wrapper {
	height: 500px;
	width: 100%;
	@include position(center, center, "");

	.info-slider-wrapper {
		@include position(space-between, center, "");
		position: relative;
		.info-slider {
			width: 500px;
			height: 400px;
			// overflow: auto;
			border: 2px dashed green;
			.info-slider-item {
				height: 100%;
				width: 100%;
				@include position(center, center, "");
				.content-text {
					height: 100%;
					width: 100%;
					border: 2px dashed red;
				}
			}
		}
	}
	.img-slider {
		width: 50%;
		height: 120%;
		border: 2px dashed green;
		position: relative;

		.slider-controls._controls-vehicles {
			position: absolute;
			bottom: -70px;
			left: -50px;
			@include position(center, center, column);
			.slider-btn {
				transform: rotate(90deg);
				margin: 0 0 20px 0;
			}
		}
	}
}
</style>