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
export default {
	data() {
		return {
			speed_coef: 0.05,
			// horCoeff: 410,
			horCoeff: 490,
		};
	},
	methods: {
		screenOnResize() {
			console.log(this.horCoeff);
			if (window.innerWidth <= 1820) {
				// TODO responsive menu
				("");
			}
		},
	},
	created() {
		window.addEventListener("resize", this.screenOnResize);
	},
	mounted() {
		const menuBody = document.querySelector("#menu_body");
		const menuList = document.querySelector("#menu_list-items");
		const menuItems = document.querySelectorAll("#menu_item");
		const speedCoef = this.speed_coef;
		const horizontalCoeff = this.horCoeff;
		let positionX = 0;
		let coordXprocent = 0;

		function setMenuMoveAnimation() {
			let menuListWidth = 0;
			menuItems.forEach((elem) => {
				menuListWidth += elem.offsetWidth;
			});

			const menuWidthDifferent = menuListWidth - menuBody.offsetWidth;
			const distX = Math.floor(coordXprocent - positionX);

			positionX += distX * speedCoef;
			let position = (menuWidthDifferent / horizontalCoeff) * positionX;

			menuList.style.cssText = `transform: translate3d(${-position}px, 0, 0);`;

			if (Math.abs(distX) > 0) {
				requestAnimationFrame(setMenuMoveAnimation);
			} else {
				menuBody.classList.remove("_init");
			}
		}

		menuBody.addEventListener("mousemove", (e) => {
			const menuWidth = menuBody.offsetWidth;
			const coordX = e.pageX - menuWidth / 100;

			coordXprocent = (coordX / menuWidth) * (window.innerWidth / 3.5);

			if (!menuBody.classList.contains("_init")) {
				requestAnimationFrame(setMenuMoveAnimation);
				menuBody.classList.add("_init");
			}
		});
	},
	destroyed() {
		window.removeEventListener("resize", this.screenOnResize);
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
	// TODO: responsible .menu-wrapper (lower width)

	.menu-list {
		box-sizing: border-box;
		margin: 0 100px 0;
		@include position(space-evenly, center, "");
		list-style: none;
		padding: 0;

		.list-item {
			height: 200px;
			transition: transform 0.2s;
			@include position(center, center, "");
		}
		.list-link {
			@include position(center, center, "");
			width: 100%;
			height: 100%;
			padding: 0 200px;
			@include font("Poppins", 6em, 900, transparent);
			-webkit-text-stroke: 2px #000;
			text-decoration: none;
			white-space: nowrap;
			@media screen and (max-width: 1820px) {
				padding: 0 100px;
			}
		}
	}
}
</style>