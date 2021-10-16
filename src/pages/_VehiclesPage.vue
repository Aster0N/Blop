<template>
	<div class="page vehicles-page">
		<div class="_container">
			<div class="vehicles-title _page-title">Vehicles</div>
			<div class="vehicle-slider-wrapper">
				<div class="info-slider-wrapper">
					<div class="info-slider" id="infoSlider">
						<div class="info-slider-item">
							<div class="content-text">
								<div class="info-slider-title">Discount</div>
								<ul class="info-slider-list">
									<li class="slider-list-item">
										<span class="info-highlighted">5%</span> for first
										rental
									</li>
									<li class="slider-list-item">
										<span class="info-highlighted">10%</span> for
										premium users
									</li>
								</ul>
							</div>
						</div>
						<div class="info-slider-item">
							<div class="content-text">
								<div class="info-slider-title">Regular customer</div>
								<ul class="info-slider-list">
									<li class="slider-list-item">
										Easily become our regular customer and get
										<span class="info-highlighted">bonuses</span>
									</li>
								</ul>
							</div>
						</div>
						<div class="info-slider-item">
							<div class="content-text">
								<div class="info-slider-title">Exclusive</div>
								<ul class="info-slider-list">
									<li class="slider-list-item">
										We have a large amount of
										<span class="info-highlighted"
											>exclusive transport</span
										>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="slider-dots" id="infoSlickDots"></div>
				</div>
				<div class="img-slider-wrapper">
					<div class="img-slider" id="imgSlider">
						<div class="img-slider-item">
							<div class="img-slider-picture">
								<img
									src="https://i.ibb.co/rsSC3tJ/1-slide.jpg"
									alt="car travel img 1"
								/>
							</div>
						</div>
						<div class="img-slider-item">
							<div class="img-slider-picture">
								<img
									src="https://i.ibb.co/TgPWhp1/2-slide.jpg"
									alt="car travel img 2"
								/>
							</div>
						</div>
						<div class="img-slider-item">
							<div class="img-slider-picture">
								<img
									src="https://i.ibb.co/qdqswZ7/3-slide.jpg"
									alt="car travel img 3"
								/>
							</div>
						</div>
					</div>
					<div
						class="slider-controls _controls-vehicles"
						id="sliderControls"
					>
						<div class="controls-button">
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
	</div>
</template>
<script>
import $ from "jquery";
import "../assets/js/slick.min.js";
import setGrab from "../assets/js/slider-grab.js";

export default {
	data() {
		return {};
	},
	mounted() {
		$("#infoSlider").slick({
			arrows: false,
			dots: true,
			appendDots: $(".slider-dots"),
			autoplay: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			touchMove: false,
			mobileFirst: false,
			easing: "ease",
			autoplaySpeed: 4000,
			touchThreeshold: 3,
			asNavFor: "#imgSlider",
		});
		$("#imgSlider").slick({
			arrows: false,
			asNavFor: "#infoSlider",
		});

		$(".slider-prev-btn").click(function () {
			$("#infoSlider").slick("slickPrev");
		});
		$(".slider-next-btn").click(function () {
			$("#infoSlider").slick("slickNext");
		});

		const infoSliderDotsUl = document.querySelector(".slick-dots");
		const infoSliderDotsLi = document.querySelectorAll("#infoSlickDots li");
		/*const infoSliderDots = document.querySelector(".slider-dots");
		infoSliderDots.style.cssText = `
			width: ${dotsWidth}px;
		position: absolute;
		right: ${dotsWidth + 10}px;
		top: 50%;
		transform: translateY(-50%);
		`;*/
		const dotsWidth = 10;
		const infoSlickList = document
			.querySelector("#infoSlider")
			.querySelector(".slick-list");
		const infoSlickTrack = document
			.querySelector("#infoSlider")
			.querySelector(".slick-track");
		const imgSlickList = document
			.querySelector("#imgSlider")
			.querySelector(".slick-list");
		const imgSlickTrack = document
			.querySelector("#imgSlider")
			.querySelector(".slick-track");

		infoSlickList.style.cssText = `
			overflow: hidden;
			height: 100%;
		`;
		infoSlickTrack.style.cssText = `
			display: flex;
			height: 100%;
		`;

		imgSlickList.style.cssText = `
			overflow: hidden;
			height: 100%;
		`;
		imgSlickTrack.style.cssText = `
			display: flex;
			height: 100%;
		`;

		infoSliderDotsUl.style.cssText = `
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			padding: 0;
			margin: 0;
		`;

		for (let i = 0; i < infoSliderDotsLi.length; i++) {
			let el = infoSliderDotsLi[i];
			el.style.cssText = `
				box-sizing: border-box;
				width: ${dotsWidth}px;
				height: ${dotsWidth}px;
				background-color: #395A69;
				transition: all 0.2s ease;
				cursor: pointer;
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
		setGrab(infoSlickTrack);
		setGrab(imgSlickTrack);
	},
};
</script>
<style lang="scss" scoped>
.vehicle-slider-wrapper {
	height: 500px;
	width: 100%;
	@include position(center, center, "");

	.info-slider-wrapper {
		@include position(space-between, center, column);
		position: relative;
		.info-slider {
			width: 500px;
			height: 400px;
			overflow: hidden;

			.info-slider-item {
				background-color: $light-blue;
				height: 100%;
				width: 100%;
				padding: 50px;
				overflow: auto;
				.content-text {
					.info-slider-title {
						@include font("Jost", 50px, 900, rgba($dark-color, 0.4));
						text-transform: lowercase;
					}
					.info-slider-list {
						padding: 20px 0 0 0;
						margin: 0;
						list-style-type: none;
						@include font("Inter", 20px, 400, #000);

						.slider-list-item {
							margin: 0 0 10px 0;
							.info-highlighted {
								font-weight: 600;
								color: $secondary-color;
							}
						}
					}
				}
			}
		}
	}
	.img-slider-wrapper {
		width: 50%;
		height: 120%;
		position: relative;

		.slider-controls._controls-vehicles {
			.controls-button {
				position: absolute;
				bottom: 20px;
				left: -100px;
				@include position(center, center, "");
			}
		}

		.img-slider {
			width: 100%;
			height: 100%;
			overflow: hidden;
			.img-slider-item {
				width: 100%;
				height: 100%;

				.img-slider-picture {
					width: 100%;
					height: 100%;
					background-color: #6d6d6d;
					overflow: hidden;
					padding: 0;
					position: relative;

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						position: absolute;
						top: 0;
						left: 0;
					}
				}
			}
		}
	}
}
</style>