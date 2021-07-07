<template>
	<div class="menu-container" id="menu-content">
		<div class="menu-wrapper" id="menu_body">
			<ul class="menu-list" id="menu_list-items">
				<li class="list-item list-item-1" id="menu_item">
					<router-link class="list-link" :to="{ name: 'login' }"
						>login / register</router-link
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
					<router-link class="list-link" :to="{ name: 'contacts' }"
						>contacts</router-link
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
		return {
			move_coef: 1.5,
			move_left_coef: 1,
			resizeScreenCoef: 1,
			// speed_coef: 0.05,

			// onResize() {
			//   // todo a media queries with js down below (нужно увеличивать значение переменной move_left_coef)
			//   if (window.innerWidth > 1820) {
			//     // this.move_coef = 2;
			//     console.log("> 1820");
			//   }
			//   if (window.innerWidth <= 1820) {
			//     // this.move_coef = 14;
			//     console.log("<= 1820");
			//     console.log(this.move_coef);
			//   }
			// },
		};
	},

	mounted() {
		/* const menuBody = document.querySelector("#menu_body");

    const menuList = document.querySelector("#menu_list-items");
    const menuItems = document.querySelectorAll("#menu_item");

    const speedCoef = this.speed_coef;
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
      let position = (menuWidthDifferent / 100) * positionX;

      menuList.style.cssText = `transform: translate3d(${-position}px, 0, 0);`;

      console.log("pos x:", positionX, "pos:", position);

      if (Math.abs(distX) > 0) {
        requestAnimationFrame(setMenuMoveAnimation);
      } else {
        menuBody.classList.remove("_init");
      }
    }

    menuBody.addEventListener("mousemove", (e) => {
      const menuWidth = menuBody.offsetWidth;

      // const coordX = e.pageX - menuWidth / 2;
      const coordX = e.pageX;
      coordXprocent = (coordX / menuWidth)  * 200;

      if (!menuBody.classList.contains("_init")) {
        requestAnimationFrame(setMenuMoveAnimation);
        menuBody.classList.add("_init");
      }
    }); */
		let moving_coefficient = this.move_coef;
		let move_to_left = this.move_left_coef;
		let resizeCoef = this.resizeScreenCoef;
		$(document).ready(function () {
			let usageWidth = $(".menu-wrapper").width(),
				slidesWidth = $("#menu-content").width(),
				$item = $(".list-item");

			$(".menu-wrapper").on("mousemove", function (e) {
				let mouseX = e.pageX,
					offset =
						(mouseX / usageWidth) * slidesWidth -
						mouseX / moving_coefficient / move_to_left / resizeCoef;
				console.log("offset:", offset);
				$item.css({
					"-webkit-transform": "translate3d(" + -offset + "px,0,0)",
					transform: "translate3d(" + -offset + "px,0,0)",
				});
			});
		});
	},
	created() {
		window.addEventListener("resize", () => {
			// TODO From css
			if (window.innerWidth > 1820) {
				console.log("> 1820");
			}
			if (window.innerWidth <= 1820) {
				const menuLinks = document.querySelectorAll(".list-link");
				console.log("<= 1820");
				menuLinks.forEach((elem) => {
					elem.style.cssText = `padding: 0 150px;`;
					console.log("ELEM:", elem, "PADDING:", elem.style.padding);
				});
			}
		});
	},

	beforeDestroy() {
		window.removeEventListener("resize", this.onResize);
	},
};
</script>

<style scoped lang="scss">
.menu-container {
	height: 100vh;
	@include position(flex-start, center, "");
	overflow: hidden;
}
.menu-wrapper {
	width: 50%;
	height: 100%;
	@include position("", center, "");

	.menu-list {
		box-sizing: border-box;
		margin: 0;
		@include position(space-evenly, center, "");
		list-style: none;
		padding: 0;
		border: 1px dashed green;

		.list-item {
			height: 200px;
			transition: transform 0.2s;
			@include position(center, center, "");
			border: 1px dashed red;
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
		}
	}
}
</style>