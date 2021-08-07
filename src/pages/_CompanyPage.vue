<template>
	<div class="page company-page">
		<div class="company-page-wrapper">
			<div class="company-title">Our company</div>
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
							Our international network has more than 1,500 rental
							stations, widely distributed throughout Europe.
						</li>
						<li class="info-item">
							We have more than 20 types of vehicles, which can be rented
							by any adult.
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

export default {
	components: {
		Popup,
	},
	data() {
		return {
			popupOpenTrigger: false,
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
			box-sizing: border-box;
			@include font("Poppins", 72px, 700, #000);
			padding: 0 40px;
			margin: 0 0 30px 0;
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
				padding: 80px;
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
			background-color: #395a69;
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
</style>