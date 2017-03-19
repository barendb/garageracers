/// <reference path="index.d.ts" />
import './svg';
import { MobileHelper } from './mobile-helper';

function setBackgroundImageSize() {
	let background = document.querySelector('.background');
	background.style.height = window.innerHeight + 'px';
}

function setYouTubeVideoWidth() {
	let ratio = 1.776824034;

	let iframe = document.querySelector('iframe');

	 if (!MobileHelper.isMobile()) {
	 	iframe.width = 560;
		iframe.height = parseInt(560/ratio);
	 	return;
	}

	iframe.width = window.innerWidth;
	iframe.height = parseInt(window.innerWidth / ratio);
}

window.onresize = () => {
	setBackgroundImageSize();
	setYouTubeVideoWidth();
}

setBackgroundImageSize();
setYouTubeVideoWidth();

