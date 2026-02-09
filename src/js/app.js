document.addEventListener("DOMContentLoaded", () => {
	const hamburgerBtn = document.querySelector(".header__menu-btn");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeBtn = document.querySelector(".mobile-menu__close");
	const overlay = document.getElementById("overlay");

	function openMenu() {
		mobileMenu.classList.add("active");
		overlay.classList.add("active");
		hamburgerBtn.classList.add("active");
	}

	function closeMenu() {
		mobileMenu.classList.remove("active");
		overlay.classList.remove("active");
		hamburgerBtn.classList.remove("active");
	}

	hamburgerBtn.addEventListener("click", openMenu);
	closeBtn.addEventListener("click", closeMenu);
	overlay.addEventListener("click", closeMenu);

	window.addEventListener("resize", () => {
		if (window.innerWidth >= 769) {
			closeMenu();
		}
	});
});
