const elTabItems = document.querySelectorAll('.projects__item');
const elTabLinks = document.querySelectorAll('.projects__link');
const elPanelItems = document.querySelectorAll('.panel__list');
const projectsList = document.querySelector('.projects__list');
const projectsLink = document.querySelector('.projects__link');
const projectsItem = document.querySelector('.projects__item');

elTabLinks.forEach(function (link) {
	link.addEventListener('click', function (evt) {
		evt.preventDefault();

		elTabItems.forEach(function (item) {
			item.classList.remove('projects__item--active');
		});

		link.parentElement.classList.add('projects__item--active');

		elPanelItems.forEach(function (panel) {
			panel.classList.remove('panel__list--active');
		});

		document
			.querySelector(link.getAttribute('href'))
			.classList.add('panel__list--active');
	});
});

// carousel
$('.hero-owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	autoplay: true,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	loop: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		600: {
			items: 1,
			nav: false,
		},
		1000: {
			items: 1,
			nav: true,
		},
	},
});
$('.community-owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	// autoplay:true,
	// autoplayTimeout:4000,
	// autoplayHoverPause: true,
	loop: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
		},
		600: {
			items: 1.5,
			nav: false,
		},
		1000: {
			items: 1.5,
			nav: true,
		},
	},
});
// carousel
