<template>
	<div id="unregistered-user-page" class="user-page-ur">
		<main-header></main-header>
		<div class="user-page-info-ur">
			<div class="info-ur">
				<div class="info-title-ur">Vehicle rental</div>
				<div class="info-sub-title-ur">
					A modern transport rental system that is already widespread
					almost all over the world.
				</div>
			</div>
			<router-link
				class="get-started-link-ur"
				id="getStartedBtn"
				:to="{ name: 'vehicles' }"
				>Get started
				<span class="btn-arrow-ur" id="btn-arrow">
					<svg
						width="16"
						height="18"
						viewBox="0 0 16 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="btn-arrow">
							<rect
								id="Rectangle 45"
								x="1.43138"
								y="0.809814"
								width="16"
								height="2"
								rx="1"
								transform="rotate(30 1.43138 0.809814)"
								fill="white"
							/>
							<rect
								id="Rectangle 46"
								x="0.431366"
								y="15.8098"
								width="16"
								height="2"
								rx="1"
								transform="rotate(-30 0.431366 15.8098)"
								fill="white"
							/>
						</g>
					</svg>
				</span>
			</router-link>
		</div>
		<div class="menu-cursor-pc" id="cursor"></div>
	</div>
</template>

<script>
import MainHeader from "./MainHeader.vue";

export default {
	name: "unregistered-user",
	components: {
		MainHeader,
	},
	data() {
		return {};
	},
	mounted() {
		const wrapperPage = document.getElementById("unregistered-user-page");
		const mouseCursor = document.getElementById("cursor");
		const startBtn = document.getElementById("getStartedBtn");
		const startBtnArrow = document.getElementById("btn-arrow");
		const cursorAnimElem = document.querySelectorAll(".cursor_anim"); // from MainHeader:
		mouseCursor.style.display = "none";
		// turn on animation
		function animateCursor(e, element) {
			if (e.target == element) {
				if (
					!(
						element.classList.contains("link-premium") ||
						element.classList.contains("link-account")
					)
				) {
					mouseCursor.classList.add("cursorActiveColor", "cursor-filter");
				} else {
					mouseCursor.classList.add("cursorActiveColor");
				}
			}
		}
		// turn off animation
		function offAnimationCursor() {
			mouseCursor.classList.remove("cursorActiveColor", "cursor-filter");
		}
		function animateArrow() {
			startBtnArrow.style.cssText = `
        right: 100px;
        transform: scale(1.4);
      `;
		}
		function offAnimationArrow() {
			startBtnArrow.style.cssText = `
        right: 130px;
        transform: scale(1.0);
      `;
		}

		function cursor(e) {
			mouseCursor.style.display = "inline";
			mouseCursor.style.top =
				e.pageY - mouseCursor.offsetHeight * 0.8 + "px";
			mouseCursor.style.left =
				e.pageX - mouseCursor.offsetWidth * 0.8 + "px";
			cursorAnimElem.forEach((elem) => {
				animateCursor(e, elem);
			});
		}
		startBtn.addEventListener("mousemove", (e) => {
			animateCursor(e, startBtn);
			animateArrow();
		});
		startBtn.addEventListener("mouseleave", () => {
			offAnimationCursor();
			offAnimationArrow();
		});
		wrapperPage.addEventListener("mousemove", (e) => cursor(e));
		cursorAnimElem.forEach((elem) => {
			elem.addEventListener("mouseleave", () => offAnimationCursor());
		});
	},
};
</script>

<style lang="scss" scoped>
.user-page-ur {
	cursor: none;
	height: 100vh;
	background: url("https://i.ibb.co/FmX3zb9/f1.jpg") no-repeat fixed center;
}

.menu-cursor-pc {
	position: absolute;
	height: 15px;
	width: 15px;
	transition: border, transform 0.2s cubic-bezier(0.59, -0.67, 0.6, 1.67);
	transform-origin: center;
	border-radius: 50%;
	border: 2px solid #052730;
	background-color: transparent;
	pointer-events: none;
	transform: translate(-20%, -20%);
	z-index: 999;
	@include position(center, center, "");
}

.menu-cursor-pc.cursor-filter {
	backdrop-filter: hue-rotate(120deg);
}
.menu-cursor-pc.cursorActiveColor {
	transform: scale(1.8);
	border: 3px solid $secondary-color;
}
.user-page-info-ur {
	background-color: rgba(0, 0, 0, 0.4);
	width: 720px;
	margin: 50px 0 0 0;
	padding: 80px 40px;
	@include position(center, stretch, column);

	.info-ur {
		user-select: none;
		padding: 0 0 30px 0;
		.info-title-ur {
			@include font("Poppins", 64px, 700, #fff);
			padding: 0 0 20px 0;
		}
		.info-sub-title-ur {
			@include font("Inter", 24px, 200, #fff);
		}
	}
	.get-started-link-ur {
		display: block;
		position: relative;
		border: none;
		max-width: 250px;
		padding: 25px 125px;
		background-color: rgba($primary-color, 0.4);
		letter-spacing: 3px;
		text-decoration: none;
		transition: $buttonTransition;
		text-align: center;
		@include font("Jost", 30px, 800, #fff);

		&,
		&:hover {
			cursor: none;
			background-color: rgba($primary-color, 0.5);
		}

		.btn-arrow-ur {
			display: inline-block;
			position: absolute;
			right: 130px;
			transition: all ease 0.5s;
		}
	}
}
</style>