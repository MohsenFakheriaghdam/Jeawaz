document.addEventListener("DOMContentLoaded", () => {
	/* =========================
	   Mobile Menu
	========================= */
	const hamburgerBtn = document.querySelector(".header__menu-btn");
	const mobileMenu = document.querySelector(".mobile-menu");
	const closeBtn = document.querySelector(".mobile-menu__close");
	const overlay = document.getElementById("overlay");

	function openMenu() {
		mobileMenu?.classList.add("active");
		overlay?.classList.add("active");
		hamburgerBtn?.classList.add("active");
	}

	function closeMenu() {
		mobileMenu?.classList.remove("active");
		overlay?.classList.remove("active");
		hamburgerBtn?.classList.remove("active");
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
	   Hero Slider
	========================= */
	const slider = document.querySelector(".hero-slider");
	const slides = document.querySelectorAll(".hero-slider__slide");

	if (slider && slides.length > 0) {
		let currentIndex = 0;
		let intervalId;
		const intervalTime = 5000;
		const animationDuration = 1200;

		function easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
		}

		function animateScroll(target) {
			const start = slider.scrollLeft;
			const change = target - start;
			const startTime = performance.now();

			function animate(currentTime) {
				const elapsed = currentTime - startTime;
				const progress = Math.min(elapsed / animationDuration, 1);
				const eased = easeInOutCubic(progress);

				slider.scrollLeft = start + change * eased;

				if (progress < 1) {
					requestAnimationFrame(animate);
				}
			}

			requestAnimationFrame(animate);
		}

		function goToSlide(index) {
			const target = slides[index].offsetLeft;
			animateScroll(target);
		}

		function nextSlide() {
			currentIndex = (currentIndex + 1) % slides.length;
			goToSlide(currentIndex);
		}

		function startAutoplay() {
			stopAutoplay();
			intervalId = setInterval(nextSlide, intervalTime);
		}

		function stopAutoplay() {
			if (intervalId) clearInterval(intervalId);
		}

		slider.addEventListener("mouseenter", stopAutoplay);
		slider.addEventListener("mouseleave", startAutoplay);

		startAutoplay();
	}

	/* =========================
	   Live Clock
	========================= */
	const hEl = document.getElementById("h");
	const mEl = document.getElementById("m");
	const sEl = document.getElementById("s");

	if (hEl && mEl && sEl) {
		function updateClock() {
			const now = new Date();

			const h = String(now.getHours()).padStart(2, "0");
			const m = String(now.getMinutes()).padStart(2, "0");
			const s = String(now.getSeconds()).padStart(2, "0");

			hEl.textContent = h;
			mEl.textContent = m;
			sEl.textContent = s;
		}

		updateClock();
		setInterval(updateClock, 1000);
	}
});
