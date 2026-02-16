document.addEventListener("DOMContentLoaded", () => {
	/* =========================
	   Mobile Menu
	========================= */
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

	if (hamburgerBtn && mobileMenu && closeBtn && overlay) {
		hamburgerBtn.addEventListener("click", openMenu);
		closeBtn.addEventListener("click", closeMenu);
		overlay.addEventListener("click", closeMenu);

		window.addEventListener("resize", () => {
			if (window.innerWidth >= 769) {
				closeMenu();
			}
		});
	}

	/* =========================
	   Hero Slider - Final Version
	========================= */
	const slider = document.querySelector(".hero-slider");
	const slides = document.querySelectorAll(".hero-slider__slide");

	if (!slider || slides.length === 0) {
		console.error("Slider not found");
		return;
	}

	let currentIndex = 0;
	let intervalId;
	const intervalTime = 5000;

	function goToSlide(index) {
		slides[index].scrollIntoView({
			behavior: "smooth",
			inline: "start",
			block: "nearest",
		});
	}

	function nextSlide() {
		currentIndex++;

		if (currentIndex >= slides.length) {
			currentIndex = 0;
		}

		goToSlide(currentIndex);
	}

	function startAutoplay() {
		stopAutoplay();
		intervalId = setInterval(nextSlide, intervalTime);
	}

	function stopAutoplay() {
		clearInterval(intervalId);
	}

	// توقف روی hover
	slider.addEventListener("mouseenter", stopAutoplay);
	slider.addEventListener("mouseleave", startAutoplay);

	// شروع
	startAutoplay();
});
