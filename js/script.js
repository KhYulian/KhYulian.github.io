'use strict';

const spoiler_btn = document.querySelectorAll('.spoiler__btn');
const progress_bar = document.querySelector('.progress-bar');

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
