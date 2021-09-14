<template>
	<div class="menu-container" id="menu-content">
		<div class="menu-wrapper" id="menu_body">
			<ul class="menu-list" id="menu_list-items">
				<li class="list-item list-item-1" id="menu_item">
					<router-link class="list-link" :to="{ name: 'contacts' }"
						>contacts</router-link
					>
				</li>
				<li class="list-item list-item-2" id="menu_item">
					<router-link class="list-link" :to="{ name: 'vehicles' }"
						>vehicles</router-link
					>
				</li>
				<li class="list-item list-item-3" id="menu_item">
					<router-link class="list-link" :to="{ name: 'rent' }"
						>rent</router-link
					>
				</li>
				<li class="list-item list-item-4" id="menu_item">
					<router-link class="list-link" :to="{ name: 'company' }"
						>our company</router-link
					>
				</li>
				<li class="list-item list-item-5" id="menu_item">
					<router-link class="list-link" :to="{ name: 'login' }"
						>login / register</router-link
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import $ from "jquery";
export default {
	data() {
		return {};
	},
	mounted() {
		$(function () {
			const $bl = $(".menu-wrapper"),
				$th = $(".menu-list"),
				blW = $bl.outerWidth(),
				blSW = $bl.prop("scrollWidth"),
				wDiff = blSW / blW - 1,
				mPadd = 60,
				damp = 20;

			let posX = 0,
				mX2 = 0,
				mmAA = blW - mPadd * 2,
				mmAAr = blW / mmAA,
				itv = null;

			const anim = () => {
				posX += (mX2 - posX) / damp;
				$th.css({
					transform: `translateX(${-posX * wDiff}px)`,
				});
			};

			$bl.on("mousemove", function (e) {
				const mouseX = e.pageX - $(this).prop("offsetLeft");
				mX2 = Math.min(Math.max(0, mouseX - mPadd), mmAA) * mmAAr;
			})
				.on("mouseenter", function () {
					itv = setInterval(anim, 4);
				})
				.on("mouseleave", function () {
					clearInterval(itv);
				});
		});
	},
};
</script>

<style scoped lang="scss">
.menu-container {
	height: 100vh;
	@include position(center, center, "");
	overflow: hidden;
}
.menu-wrapper {
	width: 100%;
	height: 100%;
	@include position("", center, "");

	.menu-list {
		box-sizing: border-box;
		@include position(space-evenly, center, "");
		list-style: none;
		padding: 0;
		height: 100%;

		.list-item {
			height: 100%;
			@include position(center, center, "");
			transition: background-color 0.4s ease, transform 0.4s ease;
			&:hover {
				background-color: #cde8f4;
				transform: translateY(-20px);
			}
			&:hover .list-link {
				color: #000;
			}
		}
		.list-link {
			@include position(center, center, "");
			width: 100%;
			height: 100%;
			padding: 0 200px;
			-webkit-text-stroke: 2px #000;
			text-decoration: none;
			white-space: nowrap;
			transition: all 0.5s ease;
			@include font("Poppins", 6em, 900, transparent);
			@media screen and (max-width: 1820px) {
				padding: 0 100px;
			}
		}
	}
}

</style>