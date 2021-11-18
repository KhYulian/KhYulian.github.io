'use strict';

const header = document.querySelector('header');
const headerHeight = header.getBoundingClientRect().height;
const navList = document.querySelector('.menu__list');
const sections = document.querySelectorAll('.section');
const burger = document.querySelector('.burger');
const menu__list = document.querySelector('.menu__list');
const links = document.querySelectorAll('.menu__link');

// Burger-menu
function showNav() {
	burger.classList.toggle('burger_active');
	menu__list.classList.toggle('menu__list_active');
}
burger.addEventListener('click', showNav);
links.forEach(el => el.addEventListener('click', showNav));

// Smooth scrolling
navList.addEventListener('click', function (ev) {
	ev.preventDefault();

	if (!ev.target.classList.contains('menu__link')) return;

	const id = ev.target.getAttribute('href');

	document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

// Fade not hovered nav links
function changeOpacity(ev, opacity) {
	if (ev.target.classList.contains('menu__link')) {
		const link = ev.target;
		const siblings = link
			.closest('.menu__list')
			.querySelectorAll('.menu__link');

		siblings.forEach(el => {
			if (el !== link) el.style.opacity = opacity;
		});
	}
}

navList.addEventListener('mouseover', function (ev) {
	changeOpacity(ev, '0.5');
});

navList.addEventListener('mouseout', function (ev) {
	changeOpacity(ev, '1');
});
const target = document.querySelector('#pricing').getBoundingClientRect().top;

// Sticky menu and scroll progres bar
window.addEventListener('scroll', function () {
	// sticky menu
	if (window.scrollY > target - headerHeight) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
	// scroll progress bar
	const winScroll =
		document.body.scrollTop || document.documentElement.scrollTop;
	const height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const scrolled = (winScroll / height) * 100;

	document.querySelector('.header__scroll-progress_fill').style.width =
		scrolled + '%';
});

// Intersection observer

// Reveal sections

const revealSection = function (entries, observer) {
	const [entry] = entries;

	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');

	observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
	root: null,
	threshold: 0.15
});

sections.forEach(section => {
	section.classList.add('section--hidden');
	sectionObserver.observe(section);
});
