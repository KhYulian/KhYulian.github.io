'use strict';

const spoiler_btn = document.querySelectorAll('.spoiler__btn');

function showSpoilerContent(e) {
	const btn = e.target.closest('.spoiler__btn');
	const spoiler_header = btn.parentElement;

	btn.classList.toggle('.spoiler__btn_active');
	spoiler_header.nextElementSibling.classList.toggle('spoiler__content_active');
}

spoiler_btn.forEach(el => el.addEventListener('click', showSpoilerContent));
