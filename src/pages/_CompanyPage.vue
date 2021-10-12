<template>
	<div class="page company-page">
		<div class="company-page-wrapper">
			<div class="company-title _page-title">Our company</div>

			<div class="company-info">
				<div class="info-text">
					<ul class="info-text-list">
						<li class="info-item">
							Blop is one of the most popular brands in the rental of
							various types of vehicles.
						</li>
						<li class="info-item">
							Founded in 2020, the Blop rent brand is registered in
							Europe.
						</li>
						<li class="info-item">
							Our international network has more than 1500 rental
							stations, widely distributed throughout Europe.
						</li>
						<li class="info-item">
							We have more than 20 types of vehicles, which can be rented
							by any customer.
						</li>
					</ul>
				</div>
				<div class="info-blocks">
					<div class="info-block block-faq">
						<router-link class="block-link faq-link" :to="{ name: 'faq' }"
							>faq</router-link
						>
					</div>
					<div class="info-block block-rent-details">
						<router-link
							class="block-link rent-details-link"
							:to="{ name: 'rent-details' }"
							>Rent details</router-link
						>
					</div>
				</div>

				<div class="why-us">
					<div class="why-us-title">Why us</div>
					<div class="slider">
						<div class="slider__item">
							<div class="slider__content slider__content-1">
								<div class="content-image"></div>
								<div class="content-description">
									<div class="description-title">Unique</div>
									<div class="description-text">
										We present our customers with a unique choice of
										transportation.
									</div>
								</div>
							</div>
						</div>
						<div class="slider__item">
							<div class="slider__content slider__content-2">
								<div class="content-image"></div>
								<div class="content-description">
									<div class="description-title">Fast</div>
									<div class="description-text">
										Our staff will quickly respond to your call /
										message no matter what your region.
									</div>
								</div>
							</div>
						</div>
						<div class="slider__item">
							<div class="slider__content slider__content-3">
								<div class="content-image"></div>
								<div class="content-description">
									<div class="description-title">Helpful services</div>
									<div class="description-text">
										You have the opportunity to try out any vehicle
										for free for 20 minutes.
									</div>
								</div>
							</div>
						</div>
						<div class="slider__item">
							<div class="slider__content slider__content-4">
								<div class="content-image"></div>
								<div class="content-description">
									<div class="description-title">Customer</div>
									<div class="description-text">
										We care about our customers, so the inspection of
										the vehicle and the time of approach to the car -
										free of charge.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="slider-controls">
						<button class="slider-btn slider-prev-btn">
							<img src="../assets/img/arrow_prev_wh.svg" alt="prev" />
						</button>
						<button class="slider-btn slider-next-btn">
							<img src="../assets/img/arrow_next_wh.svg" alt="next" />
						</button>
					</div>
				</div>
			</div>
			<footer class="company-footer">
				<div class="company-footer-title">info</div>
				<div class="company-footer-links">
					<ul class="footer-links-list">
						<li class="footer-links-item">
							<router-link class="footer-link" :to="{ name: 'contacts' }"
								>Contacts</router-link
							>
						</li>
						<li class="footer-links-item">
							<button
								class="footer-link footer-partners-btn footer-btn"
								@click="openPopup"
							>
								Our partners
							</button>
						</li>
						<li class="footer-links-item">
							<router-link
								:to="{ name: 'become-premium' }"
								class="footer-link"
							>
								Become a premium user
							</router-link>
						</li>
						<li class="footer-links-item">
							<router-link class="footer-link" :to="{ name: 'login' }">
								Sign in / Sign up
							</router-link>
						</li>
					</ul>
				</div>
			</footer>
		</div>

		<popup :class="{ open: popupOpenTrigger }" @closePopup="closePopup">
			<template v-slot:popup-title>Our partners</template>
			<template v-slot:popup-text></template>
			<div class="partners-wrapper">
				<ul class="partners-list">
					<li class="partners-list-item">
						<router-link
							:to="{ name: 'partners' }"
							class="partners-list-link"
							>First partner</router-link
						>
					</li>
					<li class="partners-list-item">
						<router-link
							:to="{ name: 'partners' }"
							class="partners-list-link"
							>Second partner</router-link
						>
					</li>
					<li class="partners-list-item">
						<router-link
							:to="{ name: 'partners' }"
							class="partners-list-link"
							>Third partner</router-link
						>
					</li>
					<li class="partners-list-item">
						<router-link
							:to="{ name: 'partners' }"
							class="partners-list-link"
							>Fourth partner</router-link
						>
					</li>
				</ul>
			</div>
		</popup>
	</div>
</template>
<script>
import Popup from "../components/CompanyPagePopup.vue";
import $ from "jquery";
import "../assets/js/slick.min.js";

export default {
	components: {
		Popup,
	},
	data() {
		return {
			popupOpenTrigger: false,
			isFaqPageOpen: false,
		};
	},
	methods: {
		openPopup() {
			this.popupOpenTrigger = true;
		},
		closePopup() {
			this.popupOpenTrigger = false;
		},
	},
	mounted() {
		$(".slider").slick({
			arrows: true,
			autoplay: true,
			pauseOnHover: true,
			pauseOnDotsHover: true,
			touchMove: false,
			mobileFirst: false,
			easing: "ease",
			autoplaySpeed: 4000,
			touchThreeshold: 3, // for mobile
		});
		$(".slider-prev-btn").click(function () {
			$(".slider").slick("slickPrev");
		});
		$(".slider-next-btn").click(function () {
			$(".slider").slick("slickNext");
		});

		let slickList = document.querySelector(".slick-list");
		let slickTrack = document.querySelector(".slick-track");
		let slickArrows = document.querySelectorAll(".slick-arrow");

		slickList.style.cssText = `
			box-sizing: border-box;
			overflow: hidden;
			width: 1200px;
			margin: 0 auto;
			padding: 50px;
			background-color: #FFFBF4;
		`;
		slickTrack.style.cssText = `
			display: flex;
		`;
		slickTrack.addEventListener("mouseenter", () => {
			document.body.style.cursor = "grab";
		});
		slickTrack.addEventListener("mouseleave", () => {
			document.body.style.cursor = "default";
		});
		slickTrack.addEventListener("mousedown", () => {
			document.body.style.cursor = "grabbing";
		});
		slickTrack.addEventListener("mouseup", () => {
			document.body.style.cursor = "grab";
		});
		slickArrows.forEach((el) => {
			el.style.cssText = `
				font-size: 0;
				position: absolute;
				top: 0;
				left: 0;
				pointer-events: none;
				visibility: hidden;
				display: none;
			`;
		});
	},
};
</script>
<style lang="scss" scoped>
.company-page {
	@include font("Inter", 20px, regular, #343131);
	height: 100%;
	.company-page-wrapper {
		min-height: 100%;
		@include position("", "", column);

		.company-title {
			padding: 40px;
		}

		.company-info {
			flex: 1 1 auto;
			position: relative;
			.info-text {
				width: 1170px;
				padding: 30px 100px;
				background-color: rgba(143, 190, 206, 0.1);
				.info-text-list {
					margin: 0;
					padding: 0;
					list-style: none;
					.info-item {
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
					}
					.info-item:last-child {
						margin: 0;
					}
				}
			}
			.info-blocks {
				padding: 100px;
				@include position(flex-start, center, "");
				flex-wrap: wrap;
				.info-block {
					width: 200px;
					height: 200px;
					margin: 0 100px 0 0;
					@include position(center, center, "");
				}
				.block-link {
					width: 100%;
					height: 100%;
					cursor: pointer;
					letter-spacing: 1px;
					padding: 0;
					background-color: #cde8f4;
					@include font("Jost", 22px, 600, #000);
					@include position(center, center, "");
					transition: $buttonTransition;
					text-decoration: none;
					&:hover {
						text-decoration: underline;
						background-color: rgba($secondary-color, 0.4);
					}
				}
				.block-faq {
					.faq-link {
						text-transform: uppercase;
					}
				}
			}

			&::before {
				content: "";
				background-color: $secondary-color;
				display: block;
				width: 600px;
				height: 2px;
				position: absolute;
				top: 0;
				left: 0;
			}
		}

		.company-footer {
			margin: 0;
			color: #fff;
			padding: 40px 0 80px 0;
			background-color: $button-color;
			.company-footer-title {
				text-align: center;
				padding: 0 0 20px 0;
				@include font("Poppins", 36px, 550, #fff);
			}
			.company-footer-links {
				.footer-links-list {
					margin: 0 auto;
					padding: 0;
					list-style: none;
					min-width: 780px;
					@include position(space-evenly, center, "");
					flex-wrap: wrap;
					.footer-link {
						color: #cde8f4;
						cursor: pointer;
						border: 1px solid transparent;
						padding: 5px;
						transition: $buttonTransition;
						&:hover {
							text-decoration-color: $secondary-color;
							color: #fff;
						}
					}
					.footer-btn {
						margin: 0;
						text-decoration: underline;
						border: none;
						outline: none;
						background-color: transparent;
					}
				}
			}
		}
	}
}

.why-us {
	.why-us-title {
		padding: 0 0 30px 100px;
		@include font("Poppins", 36px, regular, $title-color);
	}
	.slider {
		.slick-list {
			.slick-track {
				.slider__item {
					padding: 20px;
					height: 200px;

					.slider__content {
						width: 100%;
						height: 100%;
						@include position(space-evenly, flex-start, "");
						.content-image {
							height: 100%;
							width: 35%;
							background-color: #c0c0c0;
							@include position(center, center, "");
						}
						.content-description {
							height: 100%;
							width: 35%;
							.description-title {
								letter-spacing: 2px;
								margin: 0 0 15px 0;
								text-transform: uppercase;
								@include font("Poppins", 24px, 200, #ff6262);
							}
							.description-text {
								max-height: 80%;
								overflow: auto;
								@include font("Inter", 20px, 300, #000);
							}
						}
					}
				}
			}
		}
	}
}
</style>

