'use strict';

const spoiler_btn = document.querySelectorAll('.spoiler__btn');
const progress_bar = document.querySelector('.progress-bar');
const about_me_articles = document.querySelectorAll('.about-me__article');
const spoilers = document.querySelectorAll('.spoiler');
const avatar = document.querySelector('.avatar');

function showSpoilerContent(e) {
	const btn = e.target.closest('.spoiler__btn');
	const spoiler_header = btn.parentElement;

	btn.classList.toggle('.spoiler__btn_active');
	spoiler_header.nextElementSibling.classList.toggle('spoiler__content_active');
}

spoiler_btn.forEach(el => el.addEventListener('click', showSpoilerContent));

window.addEventListener('scroll', () => {
	const height =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;

	const progress = Math.round((window.scrollY / height) * 100);

	progress_bar.style.width = progress + '%';
});

function startAnimation(targetElement, animationName, animationDelay = 0) {
	targetElement.forEach(
		(el, idx) =>
			(el.style.animation = `${animationName} 600ms ${
				animationDelay + idx * 600
			}ms forwards`)
	);
}

startAnimation(spoilers, 'slideInX', 600);
startAnimation(about_me_articles, 'slideInArticles', 600);

avatar.src = './img/avatar.jpg';

function loadImg() {
	this.classList.remove('lazy');
	this.removeEventListener('load', loadImg);
}
avatar.addEventListener('load', loadImg);
