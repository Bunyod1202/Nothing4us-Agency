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

const elThemeBtn = document.querySelector(".switch-checkbox")
const elMenuBtn = document.querySelector(".menu-btn")
const elLogin = document.querySelector(".modal")
const elCloseBtn = document.querySelector(".close-btn")
const elBody = document.querySelector(".site-body")
const elBtnClose = document.querySelector(".close-btn")
const elHeader = document.querySelector(".menu-header")

let theme = localStorage.getItem("theme") || ""
if (theme === "body--dark") {
  elBody.classList.toggle("body--dark")
}
elMenuBtn.addEventListener("click", () => {
  elHeader.classList.add("menu-header--active")
})
elThemeBtn.addEventListener("change", () => {
  elBody.classList.toggle("body--dark")
  if (theme === "body--dark") {
    localStorage.setItem("theme", "")
  } else {
    localStorage.setItem("theme", "body--dark")
  }
})

elBtnClose.addEventListener("click", () => {
  elHeader.classList.remove("menu-header--active")
})
// elLoginBtn.addEventListener("click", () => {
//   elLogin.classList.add("modal--active")
// })
// elCloseBtn.addEventListener("click", () => {
//   elLogin.classList.remove("modal--active")
// })

var elTabItems = document.querySelectorAll(".choose__filter-item");
var elTabLinks = document.querySelectorAll(".choose__filter-link");
var elPanelItems = document.querySelectorAll(".panel__list");

elTabLinks.forEach(function (link) {
  link.addEventListener("click", function (evt) {
    evt.preventDefault();

    elTabItems.forEach(function (item) {
      item.classList.remove("choose__filter-item--active");
    })

    link.parentElement.classList.add("choose__filter-item--active");

    elPanelItems.forEach(function (panel) {
      panel.classList.remove("panel__list--active");
    })

    document.querySelector(link.getAttribute("href")).classList.add("panel__list--active");
  })

})



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

// $('.hero-owl-carousel').owlCarousel({
//   loop: true,
//   margin: 10,
//   responsiveClass: true,
//   autoplay: true,
//   autoplayTimeout: 4000,
//   autoplayHoverPause: true,
//   loop: true,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true
//     },
//     600: {
//       items: 1,
//       nav: false
//     },
//     1000: {
//       items: 1,
//       nav: true,

//     }
//   }
// })
$('.our-team-owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  // autoplay:true,
  // autoplayTimeout:4000,
  // autoplayHoverPause: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    700: {
      items: 2,
      nav: true
    },
    1394: {
      items: 3,
      nav: true,
    },
    1400: {
      items: 4,
      nav: true,

    }
  }
})
$('.new-blog-owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  // autoplay:true,
  // autoplayTimeout:4000,
  // autoplayHoverPause: true,
  dots: false,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    700: {
      items: 1.5,
      nav: true
    },
    1000: {
      items: 2,
      nav: true
    },
    1394: {
      items: 2,
      nav: true,
    },
    1400: {
      items: 3,
      nav: true,

    }
  }
})

// carousel
