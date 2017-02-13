/// <reference path="index.d.ts" />
// var files = require.context('svg-sprite-loader!../svg', false, /(garageracers|gear|youtube|instagram|facebook)\.svg$/);
// files.keys().forEach(files);

import './svg'


function setBackgroundImageSize() {
	let background = document.querySelector('.background');
	background.style.height = window.innerHeight + 'px';
}

window.onresize = () => {
	setBackgroundImageSize();
}

setBackgroundImageSize();
