/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Sprite = __webpack_require__(9);
var globalSprite = new Sprite();

if (document.body) {
  globalSprite.elem = globalSprite.render(document.body);
} else {
  document.addEventListener('DOMContentLoaded', function () {
    globalSprite.elem = globalSprite.render(document.body);
  }, false);
}

module.exports = globalSprite;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="index.d.ts" />
__webpack_require__(11);
var mobile_helper_1 = __webpack_require__(10);
function setBackgroundImageSize() {
    var background = document.querySelector('.background');
    background.style.height = window.innerHeight + 'px';
}
function setYouTubeVideoWidth() {
    var ratio = 1.776824034;
    var iframe = document.querySelector('iframe');
    if (!mobile_helper_1.MobileHelper.isMobile()) {
        iframe.width = 560;
        iframe.height = parseInt(560 / ratio);
        return;
    }
    iframe.width = window.innerWidth;
    iframe.height = parseInt(window.innerWidth / ratio);
}
window.onresize = function () {
    setBackgroundImageSize();
    setYouTubeVideoWidth();
};
setBackgroundImageSize();
setYouTubeVideoWidth();


/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function(host) {

  var properties = {
    browser: [
      [/msie ([\.\_\d]+)/, "ie"],
      [/trident\/.*?rv:([\.\_\d]+)/, "ie"],
      [/firefox\/([\.\_\d]+)/, "firefox"],
      [/chrome\/([\.\_\d]+)/, "chrome"],
      [/version\/([\.\_\d]+).*?safari/, "safari"],
      [/mobile safari ([\.\_\d]+)/, "safari"],
      [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"],
      [/crios\/([\.\_\d]+).*?safari/, "chrome"],
      [/opera/, "opera"],
      [/opera\/([\.\_\d]+)/, "opera"],
      [/opera ([\.\_\d]+)/, "opera"],
      [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"],
      [/opios\/([a-z\.\_\d]+)/, "opera"],
      [/blackberry/, "blackberry"],
      [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"],
      [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"],
      [/rim.*?version\/([\.\_\d]+)/, "blackberry"],
      [/iceweasel\/([\.\_\d]+)/, "iceweasel"],
      [/edge\/([\.\d]+)/, "edge"]
    ],
    os: [
      [/linux ()([a-z\.\_\d]+)/, "linux"],
      [/mac os x/, "macos"],
      [/mac os x.*?([\.\_\d]+)/, "macos"],
      [/os ([\.\_\d]+) like mac os/, "ios"],
      [/openbsd ()([a-z\.\_\d]+)/, "openbsd"],
      [/android/, "android"],
      [/android ([a-z\.\_\d]+);/, "android"],
      [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"],
      [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"],
      [/windows phone.*?([\.\_\d]+)/, "windows.phone"],
      [/windows mobile/, "windows.mobile"],
      [/blackberry/, "blackberryos"],
      [/bb\d+/, "blackberryos"],
      [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]
    ],
    device: [
      [/ipad/, "ipad"],
      [/iphone/, "iphone"],
      [/lumia/, "lumia"],
      [/htc/, "htc"],
      [/nexus/, "nexus"],
      [/galaxy nexus/, "galaxy.nexus"],
      [/nokia/, "nokia"],
      [/ gt\-/, "galaxy"],
      [/ sm\-/, "galaxy"],
      [/xbox/, "xbox"],
      [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]
    ]
  };

  var UNKNOWN = "Unknown";

  var propertyNames = Object.keys(properties);

  function Sniffr() {
    var self = this;

    propertyNames.forEach(function(propertyName) {
      self[propertyName] = {
        name: UNKNOWN,
        version: [],
        versionString: UNKNOWN
      };
    });
  }

  function determineProperty(self, propertyName, userAgent) {
    properties[propertyName].forEach(function(propertyMatcher) {
      var propertyRegex = propertyMatcher[0];
      var propertyValue = propertyMatcher[1];

      var match = userAgent.match(propertyRegex);

      if (match) {
        self[propertyName].name = propertyValue;

        if (match[2]) {
          self[propertyName].versionString = match[2];
          self[propertyName].version = [];
        } else if (match[1]) {
          self[propertyName].versionString = match[1].replace(/_/g, ".");
          self[propertyName].version = parseVersion(match[1]);
        } else {
          self[propertyName].versionString = UNKNOWN;
          self[propertyName].version = [];
        }
      }
    });
  }

  function parseVersion(versionString) {
    return versionString.split(/[\._]/).map(function(versionPart) {
      return parseInt(versionPart);
    });
  }

  Sniffr.prototype.sniff = function(userAgentString) {
    var self = this;
    var userAgent = (userAgentString || navigator.userAgent || "").toLowerCase();

    propertyNames.forEach(function(propertyName) {
      determineProperty(self, propertyName, userAgent);
    });
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Sniffr;
  } else {
    host.Sniffr = new Sniffr();
    host.Sniffr.sniff(navigator.userAgent);
  }
})(this);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var sprite = __webpack_require__(0);
var image = "<symbol viewBox=\"0 0 267 267\" id=\"facebook\" > <path d=\"M252.164 266.895c8.134 0 14.73-6.596 14.73-14.73V14.73c0-8.137-6.597-14.73-14.73-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z\" fill=\"#3D5A98\" stroke=\"none\"/> <path d=\"M184.152 266.895V163.54h34.692l5.194-40.28H184.15V97.54c0-11.662 3.24-19.61 19.963-19.61l21.33-.01V41.898c-3.69-.49-16.352-1.587-31.08-1.587-30.754 0-51.808 18.77-51.808 53.244v29.705h-34.78v40.28h34.78v103.354h41.597z\" stroke=\"none\" fill=\"#FFF\"/> </symbol>";
module.exports = sprite.add(image, "facebook");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var sprite = __webpack_require__(0);
var image = "<symbol viewBox=\"0 0 624 183\" id=\"garageracers\" > <path d=\"M150.26 4.4c1.32.734 1.942 1.064 1.87.99-.076-.072-.368-.237-.88-.495-.516-.256-.99-.495-1.43-.715-.44-.22-.296-.146.44.22 3.08 1.614 5.28 3.503 6.6 5.665 1.32 2.164 1.685 4.345 1.1 6.545l-6.82 27.72h-21.78l6.82-27.72c.292-1.54-.55-2.877-2.53-4.015-1.98-1.136-4.51-1.705-7.59-1.705h-6.6c-3.08 0-5.906.55-8.47 1.65-2.568 1.1-3.998 2.458-4.29 4.07l-13.64 55c-.295 1.54.55 2.86 2.53 3.96s4.51 1.65 7.59 1.65h6.6c3.224 0 6.084-.567 8.58-1.705 2.492-1.136 3.96-2.51 4.4-4.125l1.1-5.28H104.5l2.64-10.89h41.36l-3.96 16.17c-.88 3.594-3.706 6.803-8.47 9.625-4.768 2.824-10.525 4.86-17.27 6.105-3.816.66-7.7.99-11.66.99h-6.6c-4.548 0-8.728-.42-12.54-1.265-3.815-.842-7.04-2.016-9.68-3.52-2.64-1.502-4.585-3.245-5.83-5.225-1.248-1.98-1.65-4.106-1.21-6.38L84.7 16.61c.584-2.272 1.98-4.417 4.18-6.435 2.2-2.016 5.022-3.776 8.47-5.28 3.444-1.502 7.294-2.695 11.55-3.575C113.152.44 117.625 0 122.32 0h6.38c3.96 0 7.844.368 11.66 1.1 3.812.734 7.112 1.834 9.9 3.3zM221.54 0c4.543 0 8.76.44 12.65 1.32 3.883.88 7.15 2.054 9.79 3.52 2.64 1.468 4.58 3.228 5.83 5.28 1.243 2.054 1.573 4.218.99 6.49l-17.6 71.5h-21.78l2.64-10.89 2.64-11.11h-29.48l-2.64 11.11-2.64 10.89h-22l5.5-22h-7.92l2.64-10.89h7.92l9.46-38.61c.583-2.272 2.013-4.436 4.29-6.49 2.27-2.052 5.093-3.812 8.47-5.28 3.372-1.466 7.184-2.64 11.44-3.52C205.99.44 210.39 0 214.94 0h6.6zm7.48 16.61c.29-1.612-.517-2.97-2.42-4.07-1.91-1.1-4.477-1.65-7.7-1.65h-6.6c-3.08 0-5.906.55-8.47 1.65-2.57 1.1-4 2.458-4.29 4.07l-3.74 14.96-5.72 23.65h29.48l5.72-23.65 3.74-14.96zM340.777 31.79c-.588 2.2-1.87 4.254-3.85 6.16-1.98 1.908-4.51 3.594-7.59 5.06 2.344 1.468 4.07 3.173 5.17 5.115 1.1 1.944 1.354 3.98.77 6.105l-8.36 33.88h-22l2.86-10.89 5.5-22.99c.44-1.612-.33-2.97-2.31-4.07s-4.51-1.65-7.59-1.65h-18.04l-7.04 28.71-2.86 10.89h-21.78l9.68-39.6h-7.92l2.64-10.89h7.92L275.217 0h40.04c4.544 0 8.724.44 12.54 1.32 3.812.88 7.04 2.054 9.68 3.52 2.64 1.468 4.62 3.228 5.94 5.28 1.32 2.054 1.685 4.218 1.1 6.49l-3.74 15.18zm-34.76 5.83c3.08 0 5.902-.567 8.47-1.705 2.564-1.136 3.994-2.51 4.29-4.125l.22-.22 3.52-14.96c.44-1.612-.33-2.97-2.31-4.07s-4.585-1.65-7.81-1.65h-17.82l-5.06 20.68-1.54 6.05h18.04zM408.976 0c4.544 0 8.762.44 12.65 1.32 3.884.88 7.15 2.054 9.79 3.52 2.64 1.468 4.582 3.228 5.83 5.28 1.244 2.054 1.574 4.218.99 6.49l-17.6 71.5h-21.78l2.64-10.89 2.64-11.11h-29.48l-2.64 11.11-2.64 10.89h-22l5.5-22h-7.92l2.64-10.89h7.92l9.46-38.61c.584-2.272 2.014-4.436 4.29-6.49 2.272-2.052 5.095-3.812 8.47-5.28 3.373-1.466 7.185-2.64 11.44-3.52 4.252-.88 8.652-1.32 13.2-1.32h6.6zm7.48 16.61c.293-1.612-.516-2.97-2.42-4.07-1.907-1.1-4.476-1.65-7.7-1.65h-6.6c-3.08 0-5.905.55-8.47 1.65-2.567 1.1-3.998 2.458-4.29 4.07l-3.74 14.96-5.72 23.65h29.48l5.72-23.65 3.74-14.96zM520.295 4.4c1.32.734 1.943 1.064 1.87.99-.075-.072-.368-.237-.88-.495-.516-.256-.99-.495-1.43-.715l.44.22c3.08 1.614 5.28 3.503 6.6 5.665 1.32 2.164 1.686 4.345 1.102 6.545l-6.82 27.72h-21.78l6.82-27.72c.292-1.54-.55-2.877-2.53-4.015-1.98-1.136-4.51-1.705-7.59-1.705h-6.6c-3.08 0-5.906.55-8.47 1.65-2.57 1.1-4 2.458-4.292 4.07l-13.64 55c-.296 1.54.55 2.86 2.53 3.96 1.98 1.1 4.51 1.65 7.59 1.65h6.6c3.224 0 6.085-.567 8.58-1.705 2.492-1.136 3.96-2.51 4.4-4.125l1.1-5.28h-19.36l2.64-10.89h41.362l-3.96 16.17c-.88 3.594-3.707 6.803-8.47 9.625-4.77 2.824-10.526 4.86-17.27 6.105-3.817.66-7.702.99-11.662.99h-6.6c-4.548 0-8.73-.42-12.54-1.265-3.816-.842-7.04-2.016-9.68-3.52-2.64-1.502-4.586-3.245-5.83-5.225-1.248-1.98-1.65-4.106-1.21-6.38l13.42-55.11c.584-2.272 1.98-4.417 4.18-6.435 2.2-2.016 5.02-3.776 8.47-5.28 3.444-1.502 7.294-2.695 11.55-3.575C483.188.44 487.66 0 492.355 0h6.38c3.96 0 7.845.368 11.66 1.1 3.812.734 7.113 1.834 9.9 3.3zM623.693 0l-2.64 10.89h-39.82c-3.23 0-6.088.55-8.58 1.65-2.496 1.1-3.96 2.458-4.4 4.07l-3.74 14.96-1.32 5.94H595.533l-2.64 11h-32.56L556.153 66l-1.1 4.62-.22.77c-.297 1.468.29 2.714 1.76 3.74 1.465 1.028 3.52 1.688 6.16 1.98H604.773L602.132 88v.11h-41.69c-.515 0-1.136-.036-1.868-.11-2.496-.072-5.06-.366-7.7-.88-6.16-1.172-10.93-3.17-14.3-5.995-3.377-2.822-4.62-6.067-3.74-9.735l1.32-5.28 1.54-5.72 1.1-5.17 1.76-6.71h-7.92l2.64-10.89h7.92l5.28-21.01c.88-3.592 3.702-6.8 8.47-9.625 4.766-2.822 10.45-4.82 17.05-5.995C575.66.33 579.618 0 583.874 0H623.693z\"/> <g> <path d=\"M87.12 126.83c-.588 2.2-1.87 4.253-3.85 6.16-1.98 1.908-4.51 3.594-7.59 5.06 2.344 1.47 4.07 3.174 5.17 5.115 1.1 1.944 1.354 3.98.77 6.105l-8.36 33.88h-22l2.86-10.89 5.5-22.99c.44-1.612-.33-2.97-2.31-4.07s-4.51-1.65-7.59-1.65H31.68l-7.04 28.71-2.86 10.89H0l9.68-39.6H1.76l2.64-10.89h7.92l9.24-37.62H61.6c4.544 0 8.724.44 12.54 1.32 3.812.88 7.04 2.054 9.68 3.52 2.64 1.468 4.62 3.228 5.94 5.28 1.32 2.054 1.685 4.218 1.1 6.49l-3.74 15.18zm-34.76 5.83c3.08 0 5.902-.567 8.47-1.705 2.564-1.136 3.994-2.51 4.29-4.125l.22-.22 3.52-14.96c.44-1.612-.33-2.97-2.31-4.07s-4.585-1.65-7.81-1.65H40.92l-5.06 20.68-1.54 6.05h18.04zM155.32 95.04c4.543 0 8.76.44 12.65 1.32 3.883.88 7.15 2.054 9.79 3.52 2.64 1.468 4.58 3.228 5.83 5.28 1.243 2.054 1.573 4.218.99 6.49l-17.6 71.5H145.2l2.64-10.89 2.64-11.11H121l-2.64 11.11-2.64 10.89h-22l5.5-22H91.3l2.64-10.89h7.92l9.46-38.61c.584-2.272 2.014-4.436 4.29-6.49 2.272-2.052 5.094-3.812 8.47-5.28 3.373-1.466 7.185-2.64 11.44-3.52 4.252-.88 8.652-1.32 13.2-1.32h6.6zm7.48 16.61c.29-1.612-.517-2.97-2.42-4.07-1.91-1.1-4.477-1.65-7.7-1.65h-6.6c-3.08 0-5.906.55-8.47 1.65-2.57 1.1-4 2.458-4.29 4.07l-3.74 14.96-5.72 23.65h29.48l5.72-23.65 3.74-14.96zM211.418 161.15l-1.1 5.28c-.44 1.613.33 2.988 2.31 4.125 1.98 1.138 4.51 1.705 7.59 1.705h40.04l-2.86 10.89h-39.82c-3.96 0-7.7-.33-11.22-.99-6.16-1.172-10.928-3.17-14.3-5.995-3.376-2.822-4.62-6.066-3.74-9.734l1.32-5.28 2.64-10.89 9.46-38.61c.88-3.59 3.74-6.8 8.58-9.624 4.84-2.822 10.56-4.82 17.16-5.995 3.665-.66 7.625-.99 11.88-.99h39.82l-2.64 10.89h-40.04c-3.08 0-5.906.55-8.47 1.65-2.568 1.1-3.998 2.46-4.29 4.07l-3.74 14.96-5.72 23.65-.44 1.32-2.42 9.57zM370.476 95.04l-2.64 10.89h-39.82c-3.228 0-6.088.55-8.58 1.65-2.496 1.1-3.96 2.458-4.4 4.07l-3.74 14.96-1.32 5.94H342.316l-2.64 11h-32.56l-4.18 17.49-1.1 4.62-.22.77c-.295 1.468.292 2.714 1.76 3.74 1.464 1.027 3.52 1.687 6.16 1.98H351.556l-2.64 10.89v.11h-41.69c-.516 0-1.138-.037-1.87-.11-2.496-.073-5.06-.367-7.7-.88-6.16-1.173-10.928-3.172-14.3-5.996-3.375-2.822-4.62-6.066-3.74-9.734l1.32-5.28 1.54-5.72 1.1-5.17 1.76-6.71h-7.92l2.64-10.89h7.92l5.28-21.01c.88-3.593 3.702-6.802 8.47-9.626 4.764-2.822 10.45-4.82 17.05-5.995 3.665-.66 7.625-.99 11.88-.99h39.82zM455.174 126.83c-.588 2.2-1.87 4.253-3.85 6.16-1.98 1.908-4.51 3.594-7.59 5.06 2.344 1.47 4.07 3.174 5.17 5.115 1.1 1.944 1.353 3.98.77 6.105l-8.36 33.88h-22l2.86-10.89 5.5-22.99c.44-1.612-.33-2.97-2.31-4.07s-4.51-1.65-7.59-1.65h-18.04l-7.04 28.71-2.86 10.89h-21.78l9.68-39.6h-7.92l2.64-10.89h7.92l9.24-37.62h40.04c4.545 0 8.725.44 12.54 1.32 3.813.88 7.04 2.054 9.68 3.52 2.64 1.468 4.62 3.228 5.94 5.28 1.32 2.054 1.685 4.218 1.1 6.49l-3.74 15.18zm-34.76 5.83c3.08 0 5.902-.567 8.47-1.705 2.565-1.136 3.995-2.51 4.29-4.125l.22-.22 3.522-14.96c.44-1.612-.33-2.97-2.31-4.07s-4.586-1.65-7.81-1.65h-17.82l-5.06 20.68-1.54 6.05h18.04zM539.213 158.84l-1.76 7.59-.44.99c-1.175 3.447-4.07 6.473-8.688 9.074-4.62 2.604-10.158 4.493-16.61 5.665-1.76.293-3.558.532-5.39.714-1.836.185-3.707.275-5.61.275h-40.7l2.64-10.89H502.915c3.08-.073 5.863-.66 8.36-1.762 2.49-1.1 3.884-2.42 4.18-3.96l4.18-17.27c.44-1.54-.296-2.877-2.2-4.015-1.908-1.137-4.477-1.705-7.7-1.705H502.256c-4.4-.072-8.398-.53-11.99-1.375-3.596-.843-6.676-1.962-9.24-3.355-2.568-1.393-4.51-3.042-5.83-4.95-1.32-1.906-1.836-3.922-1.54-6.05l.22-.99 3.74-15.18c.88-3.592 3.703-6.8 8.47-9.625 4.764-2.822 10.52-4.82 17.27-5.995 3.664-.66 7.553-.99 11.66-.99h39.82l-2.64 10.89h-39.82c-3.228 0-6.09.55-8.58 1.65-2.495 1.1-3.96 2.458-4.4 4.07l-3.74 15.18c-.296 1.614.513 2.97 2.42 4.07 1.905 1.1 4.4 1.688 7.48 1.76h6.82v-.11l.22.11c3.96 0 7.626.33 11 .99 6.16 1.174 10.925 3.173 14.3 5.995 3.373 2.824 4.62 6.032 3.74 9.625l-1.98 7.59-.442 1.982z\"/> </g> <path fill=\"none\" stroke=\"none\" d=\"M0 0h624v183H0z\"/> </symbol>";
module.exports = sprite.add(image, "garageracers");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var sprite = __webpack_require__(0);
var image = "<symbol viewBox=\"0 0 184 184\" id=\"gear\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"> <defs> <path id=\"gear_a\" d=\"M0 0h184.36v184H0z\"/> </defs> <clipPath id=\"gear_b\"> <use xlink:href=\"#gear_a\" overflow=\"visible\"/> </clipPath> <g clip-path=\"url(#gear_b)\"> <defs> <path id=\"gear_c\" d=\"M0 0h184.36v184H0z\"/> </defs> <clipPath id=\"gear_d\"> <use xlink:href=\"#gear_c\" overflow=\"visible\"/> </clipPath> <path d=\"M107.813 184h-3.234c-.91-1.214-1.978-2.34-2.692-3.66-1.623-2.993-3.115-6.062-4.57-9.142-.482-1.025-1.098-1.35-2.205-1.3-2.09.097-4.19.105-6.28.005-1.142-.055-1.708.367-2.18 1.36-1.544 3.237-3.087 6.48-4.82 9.618-.66 1.19-1.83 2.09-2.77 3.118H76.55c-.39-.12-.77-.29-1.168-.36-13.324-2.423-25.53-7.52-36.623-15.284-2.857-2.002-3.055-4.383-.586-6.854 10.458-10.46 20.917-20.92 31.378-31.377 1.996-1.992 3.06-2.203 5.617-1.037 4.12 1.88 8.43 3.104 12.932 3.467 21.146 1.705 39.623-12.092 43.988-32.852.77-3.67 1.146-7.405.57-11.46-.674.634-1.152 1.06-1.604 1.512-5.89 5.883-11.81 11.735-17.638 17.676-1.635 1.668-3.28 2.102-5.48 1.305-7.188-2.61-14.4-5.156-21.638-7.64-1.748-.6-2.783-1.604-3.385-3.35-2.513-7.288-5.085-14.553-7.696-21.805-.736-2.05-.367-3.646 1.197-5.188 6.058-5.97 12.046-12.007 18.058-18.02.436-.44.855-.892 1.283-1.34l-.194-.515c-2.9.145-5.83.08-8.697.465-27.485 3.694-43.413 32.392-31.997 57.554 1.082 2.383.88 3.684-.94 5.506-10.538 10.55-21.08 21.096-31.632 31.63-2.284 2.284-4.772 2.046-6.634-.61-5.426-7.748-9.623-16.117-12.393-25.16-1.258-4.098-2.186-8.295-3.264-12.45v-2.874c1.19-.928 2.286-2.033 3.595-2.75 2.986-1.633 6.055-3.13 9.14-4.566 1.103-.514 1.43-1.148 1.37-2.332-.113-2.207-.127-4.43.006-6.637.073-1.23-.388-1.798-1.435-2.297C9.49 84.836 6.3 83.32 3.228 81.597 1.998 80.91 1.066 79.684 0 78.703v-2.516c.13-.378.316-.745.39-1.135C2.9 61.642 8.052 49.347 15.94 38.21c1.633-2.306 2.873-2.722 5.53-1.847 3.628 1.194 7.228 2.472 10.876 3.597.557.172 1.494-.09 1.94-.495 1.808-1.65 3.544-3.39 5.188-5.203.402-.446.645-1.385.473-1.948-1.097-3.594-2.33-7.147-3.517-10.713-.96-2.892-.586-4.08 1.875-5.812 8.53-6 17.81-10.455 27.848-13.28C69.473 1.576 72.842.832 76.188 0h3.234c.906 1.21 1.973 2.335 2.686 3.65 1.648 3.042 3.162 6.16 4.654 9.28.426.895.95 1.2 1.926 1.167 2.207-.076 4.42-.078 6.63-.003.978.033 1.5-.28 1.923-1.17 1.44-3.016 2.894-6.03 4.493-8.962.773-1.416 1.887-2.647 2.846-3.962h3.233c.377.133.746.318 1.135.392 13.3 2.502 25.514 7.592 36.584 15.39 2.613 1.84 2.97 2.953 1.98 5.937-1.15 3.457-2.235 6.937-3.472 10.363-.396 1.1-.166 1.715.646 2.46 1.674 1.538 3.29 3.147 4.82 4.824.77.842 1.438.944 2.486.566 3.428-1.232 6.898-2.344 10.35-3.513 2.818-.955 4.145-.547 5.838 1.866 8.09 11.543 13.28 24.28 15.697 38.158.42 2.405-.217 3.742-2.383 4.844-3.465 1.763-6.93 3.522-10.43 5.214-.877.424-1.207.903-1.17 1.9.09 2.39.08 4.79.006 7.18-.03.978.268 1.483 1.164 1.915 3.555 1.71 7.076 3.496 10.592 5.287 1.896.965 2.605 2.36 2.256 4.416-2.39 14.076-7.61 26.992-15.898 38.645-1.564 2.2-2.877 2.623-5.4 1.79-3.572-1.177-7.16-2.32-10.7-3.595-1.093-.395-1.712-.178-2.462.643-1.533 1.678-3.14 3.293-4.822 4.82-.85.773-.936 1.44-.564 2.484 1.26 3.545 2.418 7.127 3.598 10.7.84 2.546.416 3.827-1.795 5.388-8.577 6.06-17.91 10.553-28.013 13.41-3.32.942-6.695 1.682-10.044 2.514m-99.83-75.58c2.105 10.58 5.978 20.298 11.704 29.356.346-.262.5-.355.625-.48 8.684-8.68 17.355-17.37 26.066-26.02.756-.75.674-1.346.348-2.207-3.008-7.94-3.838-16.095-2.6-24.515 4.11-27.927 32.05-46.64 59.418-39.76 1.71.43 3.273.956 3.822 2.812.586 1.98-.406 3.385-1.773 4.74C98.36 59.51 91.19 66.74 83.96 73.908c-.79.784-.97 1.42-.582 2.483 1.984 5.448 3.832 10.944 5.855 16.38.3.8 1.16 1.666 1.963 1.965 5.318 1.986 10.71 3.777 16.03 5.748 1.308.482 2.093.354 3.097-.664 7.19-7.293 14.45-14.518 21.7-21.75 2.69-2.682 5.98-1.796 6.92 1.867 1.733 6.766 2.022 13.604.726 20.467-5.626 29.76-35.98 47.137-64.41 36.863-1.19-.43-1.905-.3-2.802.604-8.094 8.168-16.236 16.287-24.38 24.404-.587.584-1.308 1.03-2.192 1.72 9.508 6.075 19.3 9.956 29.965 12.022 1.933-3.855 3.855-7.633 5.716-11.436.83-1.695 2.11-2.492 3.99-2.482 4.303.02 8.604.02 12.904-.023 1.814-.02 3.09.716 3.89 2.34 1.345 2.74 2.708 5.468 4.075 8.194.58 1.156 1.193 2.3 1.762 3.387 10.574-1.804 26.666-8.52 31.547-13.132-1.326-4.01-2.648-8.04-4-12.064-.6-1.78-.217-3.217 1.145-4.545 3.16-3.093 6.27-6.24 9.35-9.41 1.21-1.245 2.583-1.685 4.228-1.237.863.234 1.697.578 2.55.86 3.327 1.1 6.657 2.192 9.917 3.267 5.453-7.3 11.227-20.945 12.846-30.012.204-1.143-.18-1.572-1.11-2.02-3.285-1.586-6.533-3.248-9.793-4.887-2.387-1.2-2.82-2.18-2.752-4.862.102-3.94.11-7.886-.004-11.826-.08-2.77.35-3.774 2.812-5.02 3.148-1.592 6.262-3.265 9.482-4.694 1.44-.642 1.58-1.42 1.268-2.758-1.586-6.78-3.754-13.355-6.92-19.563-1.727-3.39-3.688-6.66-5.53-9.96-2.32.774-4.304 1.44-6.29 2.1-1.984.66-3.982 1.29-5.96 1.978-1.99.693-3.548.212-4.97-1.37-2.158-2.396-4.36-4.772-6.73-6.96-4.19-3.87-4.767-3.406-2.528-9.773 1.06-3.02 2.02-6.08 3.02-9.106-9.438-6.307-19.495-10.575-30.41-12.827-.966-.2-1.384.06-1.788.888-1.648 3.39-3.412 6.72-5.02 10.128-.95 2.02-2.443 2.726-4.592 2.68-3.94-.085-7.89-.098-11.828.003-2.23.057-3.75-.675-4.723-2.767-1.484-3.2-3.232-6.28-4.67-9.498-.656-1.47-1.443-1.787-2.86-1.318-5.554 1.838-11.237 3.345-16.64 5.546-4.553 1.856-8.78 4.504-13.135 6.79 1.47 4.428 2.766 8.404 4.11 12.362.68 1.992.21 3.51-1.354 4.965-2.887 2.686-5.693 5.472-8.393 8.348-2.208 2.353-3.065 2.702-6.112 1.688-3.78-1.26-7.564-2.518-11.35-3.776-6.244 9.296-10.434 19.258-12.748 30.023-.207.972-.008 1.496.945 1.95 3.346 1.595 6.643 3.287 9.955 4.955 2.35 1.184 2.81 2.22 2.742 4.877-.102 3.94-.117 7.886-.004 11.826.082 2.806-.318 3.743-2.813 5-3.677 1.848-7.356 3.694-11.09 5.57\" clip-path=\"url(#gear_d)\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"/> </g> <path fill=\"none\" stroke=\"none\" d=\"M0 0h184v184H0z\"/> </symbol>";
module.exports = sprite.add(image, "gear");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {


var sprite = __webpack_require__(0);
var image = "<symbol viewBox=\"0 0 512 512\" id=\"instagram\" > <path d=\"M256 49.47c67.266 0 75.233.257 101.797 1.47 24.563 1.12 37.9 5.224 46.778 8.673 11.76 4.57 20.15 10.03 28.967 18.845 8.815 8.815 14.274 17.208 18.845 28.966 3.45 8.877 7.554 22.217 8.674 46.778 1.213 26.564 1.47 34.532 1.47 101.798s-.257 75.233-1.47 101.797c-1.12 24.563-5.224 37.9-8.673 46.778-4.57 11.76-10.03 20.15-18.845 28.967s-17.208 14.274-28.967 18.845c-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.213-34.526 1.47-101.797 1.47s-75.237-.257-101.797-1.47c-24.562-1.12-37.9-5.224-46.778-8.673-11.76-4.57-20.15-10.03-28.966-18.845-8.816-8.815-14.276-17.208-18.846-28.967-3.45-8.877-7.553-22.216-8.674-46.777-1.212-26.564-1.468-34.532-1.468-101.798s.256-75.233 1.468-101.797c1.12-24.562 5.225-37.9 8.674-46.778 4.57-11.76 10.03-20.15 18.845-28.966 8.814-8.816 17.207-14.276 28.965-18.846 8.877-3.45 22.217-7.553 46.778-8.674 26.564-1.213 34.53-1.47 101.797-1.47m0-45.39c-68.417 0-76.997.29-103.866 1.516-26.814 1.224-45.127 5.482-61.15 11.71-16.567 6.438-30.616 15.05-44.622 29.057s-22.62 28.054-29.057 44.62c-6.228 16.023-10.486 34.336-11.71 61.15C4.37 179.003 4.08 187.583 4.08 256s.29 76.996 1.516 103.866c1.224 26.814 5.482 45.127 11.71 61.15 6.438 16.566 15.05 30.616 29.057 44.622 14.005 14.005 28.055 22.618 44.62 29.057 16.025 6.228 34.338 10.486 61.152 11.71 26.87 1.226 35.45 1.516 103.866 1.516 68.42 0 76.997-.29 103.867-1.516 26.814-1.223 45.127-5.48 61.15-11.71 16.567-6.437 30.616-15.05 44.622-29.056 14.004-14.006 22.617-28.055 29.056-44.62 6.228-16.025 10.486-34.338 11.71-61.152 1.226-26.87 1.516-35.448 1.516-103.866 0-68.417-.29-76.997-1.517-103.866-1.223-26.814-5.48-45.127-11.71-61.15-6.437-16.567-15.05-30.616-29.056-44.622-14.007-14.005-28.056-22.62-44.622-29.057-16.024-6.228-34.337-10.486-61.15-11.71C332.995 4.37 324.417 4.08 256 4.08z\"/> <path d=\"M256 126.635c-71.446 0-129.365 57.918-129.365 129.365S184.555 385.364 256 385.364 385.364 327.446 385.364 256 327.446 126.635 256 126.635zm0 213.34c-46.377 0-83.974-37.598-83.974-83.975 0-46.377 37.596-83.974 83.974-83.974 46.377 0 83.974 37.596 83.974 83.974 0 46.377-37.597 83.974-83.974 83.974z\"/> <circle cx=\"390.476\" cy=\"121.524\" r=\"30.23\"/> </symbol>";
module.exports = sprite.add(image, "instagram");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


var sprite = __webpack_require__(0);
var image = "<symbol viewBox=\"0 0 773.287 481.076\" id=\"youtube-color\" > <linearGradient id=\"youtube-color_a\" gradientUnits=\"userSpaceOnUse\" x1=\"487.983\" y1=\"136\" x2=\"487.983\" y2=\"345.078\"> <stop offset=\"0\" stop-color=\"#E32E28\"/> <stop offset=\"1\" stop-color=\"#BE2126\"/> </linearGradient> <path d=\"M634.306 181.104s-2.918-20.485-11.87-29.506c-11.355-11.84-24.085-11.898-29.92-12.59C550.728 136 488.05 136 488.05 136h-.13s-62.683 0-104.468 3.007c-5.838.692-18.563.752-29.92 12.59-8.953 9.022-11.867 29.507-11.867 29.507s-2.986 24.055-2.986 48.112v22.553c0 24.054 2.985 48.108 2.985 48.108s2.914 20.484 11.867 29.506c11.357 11.842 26.28 11.465 32.926 12.705 23.89 2.282 101.525 2.987 101.525 2.987s62.746-.094 104.53-3.1c5.837-.693 18.567-.752 29.92-12.594 8.954-9.02 11.872-29.506 11.872-29.506s2.982-24.055 2.982-48.11v-22.552c0-24.056-2.98-48.11-2.98-48.11z\" fill=\"url(#youtube-color_a)\" stroke=\"none\"/> <path d=\"M323.265 305.196h-19v-11c-7.203 8.256-13.31 12.426-19.965 12.426-5.84 0-9.896-2.755-11.926-7.732-1.234-3.026-2.11-7.752-2.11-14.693v-80h19v82c.444 2.807 1.636 3.832 4.052 3.832 3.637 0 6.928-3.16 10.95-8.833v-77h19v101zM256.265 237.196c0-10.793-2.168-18.898-6-24-5.062-6.908-13-9.736-21-9.736-9.055 0-15.946 2.828-21 9.736-3.893 5.102-5.98 13.294-5.98 24.088l-.02 35.912c0 10.732 1.857 18.148 5.75 23.2 5.054 6.888 13.25 10.536 21.25 10.536s16.34-3.648 21.4-10.535c3.832-5.053 5.6-12.47 5.6-23.2v-36zm-19 38c1 10-2.102 14.962-8 14.962s-9-4.962-8-14.962v-40c-1-10 2.1-14.687 8-14.687s9.01 4.686 8.01 14.686l-.01 40zM181.265 250.196v55h-20v-55s-20.725-67.43-25-80h21L171.3 222.87l13.965-52.674h21l-25 80z\" stroke=\"none\"/> <g fill=\"#FFF\" stroke=\"none\"> <path d=\"M612.3 258.196l-.004-20.443c0-10.68-2.104-18.493-5.89-23.547-5.073-6.838-12.282-10.457-21.364-10.457-9.242 0-16.45 3.618-21.688 10.456-3.846 5.055-6.09 13.31-6.09 23.99v35c0 10.62 2.467 18.054 6.313 23.054 5.234 6.828 12.443 10.236 21.914 10.236 9.46 0 16.89-3.576 21.897-10.832 2.2-3.203 3.623-6.834 4.234-10.848.163-1.813.644-5.94.644-11.775v-2.833h-19c0 7.264.033 11.582-.135 12.568-1.034 4.84-3.632 7.264-8.09 7.264-6.214 0-8.84-4.647-8.776-13.875v-17.958H612.3zm-36.035-26.04c0-9.347 2.563-11.896 8.61-11.896 6 0 8.39 2.777 8.39 12.02v10.917l-17 .02v-11.062zM528.372 203.592c-6.66 0-13.28 4.096-19.128 11.292l.02-43.688h-18v134h18l.026-10.068c6.05 7.484 12.645 11.357 19.082 11.357 7.21 0 12.477-3.86 14.893-11.29 1.21-4.235 2-10.757 2-20v-40c0-9.464-1.213-15.935-2.422-19.955-2.416-7.484-7.262-11.648-14.47-11.648zm-2.107 72.604c0 10-2.357 13.832-7.578 13.832-2.98 0-6.415-1.534-9.442-4.562l.02-60.646c3.028-2.988 6.442-4.56 9.423-4.56 5.22 0 7.578 2.935 7.578 12.935v43zM476.265 305.196h-19v-11c-7.203 8.256-13.31 12.426-19.965 12.426-5.84 0-9.896-2.755-11.926-7.732-1.234-3.026-2.11-7.752-2.11-14.693v-79h19v81c.444 2.807 1.636 3.832 4.052 3.832 3.637 0 6.928-3.16 10.95-8.833v-76h19v100z\"/> <path d=\"M404.265 305.196h-20v-115h-21v-18.98l63-.02v19h-22\"/> </g> </symbol>";
module.exports = sprite.add(image, "youtube-color");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var Sniffr = __webpack_require__(3);

/**
 * List of SVG attributes to fix url target in them
 * @type {string[]}
 */
var fixAttributes = [
  'clipPath',
  'colorProfile',
  'src',
  'cursor',
  'fill',
  'filter',
  'marker',
  'markerStart',
  'markerMid',
  'markerEnd',
  'mask',
  'stroke'
];

/**
 * Query to find'em
 * @type {string}
 */
var fixAttributesQuery = '[' + fixAttributes.join('],[') + ']';
/**
 * @type {RegExp}
 */
var URI_FUNC_REGEX = /^url\((.*)\)$/;

/**
 * Convert array-like to array
 * @param {Object} arrayLike
 * @returns {Array.<*>}
 */
function arrayFrom(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

/**
 * Handles forbidden symbols which cannot be directly used inside attributes with url(...) content.
 * Adds leading slash for the brackets
 * @param {string} url
 * @return {string} encoded url
 */
function encodeUrlForEmbedding(url) {
  return url.replace(/\(|\)/g, "\\$&");
}

/**
 * Replaces prefix in `url()` functions
 * @param {Element} svg
 * @param {string} currentUrlPrefix
 * @param {string} newUrlPrefix
 */
function baseUrlWorkAround(svg, currentUrlPrefix, newUrlPrefix) {
  var nodes = svg.querySelectorAll(fixAttributesQuery);

  if (!nodes) {
    return;
  }

  arrayFrom(nodes).forEach(function (node) {
    if (!node.attributes) {
      return;
    }

    arrayFrom(node.attributes).forEach(function (attribute) {
      var attributeName = attribute.localName.toLowerCase();

      if (fixAttributes.indexOf(attributeName) !== -1) {
        var match = URI_FUNC_REGEX.exec(node.getAttribute(attributeName));

        // Do not touch urls with unexpected prefix
        if (match && match[1].indexOf(currentUrlPrefix) === 0) {
          var referenceUrl = encodeUrlForEmbedding(newUrlPrefix + match[1].split(currentUrlPrefix)[1]);
          node.setAttribute(attributeName, 'url(' + referenceUrl + ')');
        }
      }
    });
  });
}

/**
 * Because of Firefox bug #353575 gradients and patterns don't work if they are within a symbol.
 * To workaround this we move the gradient definition outside the symbol element
 * @see https://bugzilla.mozilla.org/show_bug.cgi?id=353575
 * @param {Element} svg
 */
var FirefoxSymbolBugWorkaround = function (svg) {
  var defs = svg.querySelector('defs');

  var moveToDefsElems = svg.querySelectorAll('symbol linearGradient, symbol radialGradient, symbol pattern');
  for (var i = 0, len = moveToDefsElems.length; i < len; i++) {
    defs.appendChild(moveToDefsElems[i]);
  }
};

/**
 * Fix for browser (IE, maybe other too) which are throwing 'WrongDocumentError'
 * if you insert an element which is not part of the document
 * @see http://stackoverflow.com/questions/7981100/how-do-i-dynamically-insert-an-svg-image-into-html#7986519
 * @param {Element} svg
 */
function importSvg(svg) {
  try {
    if (document.importNode) {
      return document.importNode(svg, true);
    }
  } catch(e) {}

  return svg;
}

/**
 * @type {string}
 */
var DEFAULT_URI_PREFIX = '#';

/**
 * @type {string}
 */
var xLinkHref = 'xlink:href';
/**
 * @type {string}
 */
var xLinkNS = 'http://www.w3.org/1999/xlink';
/**
 * @type {string}
 */
var svgOpening = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + xLinkNS + '"';
/**
 * @type {string}
 */
var svgClosing = '</svg>';
/**
 * @type {string}
 */
var contentPlaceHolder = '{content}';

/**
 * Representation of SVG sprite
 * @constructor
 */
function Sprite() {
  var baseElement = document.getElementsByTagName('base')[0];
  var currentUrl = window.location.href.split('#')[0];
  var baseUrl = baseElement && baseElement.href;
  this.urlPrefix = baseUrl && baseUrl !== currentUrl ? currentUrl + DEFAULT_URI_PREFIX : DEFAULT_URI_PREFIX;

  var sniffr = new Sniffr();
  sniffr.sniff();
  this.browser = sniffr.browser;
  this.content = [];

  if (this.browser.name !== 'ie' && baseUrl) {
    window.addEventListener('spriteLoaderLocationUpdated', function (e) {
      var currentPrefix = this.urlPrefix;
      var newUrlPrefix = e.detail.newUrl.split(DEFAULT_URI_PREFIX)[0] + DEFAULT_URI_PREFIX;
      baseUrlWorkAround(this.svg, currentPrefix, newUrlPrefix);
      this.urlPrefix = newUrlPrefix;

      if (this.browser.name === 'firefox' || this.browser.name === 'edge' || this.browser.name === 'chrome' && this.browser.version[0] >= 49) {
        var nodes = arrayFrom(document.querySelectorAll('use[*|href]'));
        nodes.forEach(function (node) {
          var href = node.getAttribute(xLinkHref);
          if (href && href.indexOf(currentPrefix) === 0) {
            node.setAttributeNS(xLinkNS, xLinkHref, newUrlPrefix + href.split(DEFAULT_URI_PREFIX)[1]);
          }
        });
      }
    }.bind(this));
  }
}

Sprite.styles = ['position:absolute', 'width:0', 'height:0'];

Sprite.spriteTemplate = function(){ return svgOpening + ' style="'+ Sprite.styles.join(';') +'"><defs>' + contentPlaceHolder + '</defs>' + svgClosing; }
Sprite.symbolTemplate = function() { return svgOpening + '>' + contentPlaceHolder + svgClosing; }

/**
 * @type {Array<String>}
 */
Sprite.prototype.content = null;

/**
 * @param {String} content
 * @param {String} id
 */
Sprite.prototype.add = function (content, id) {
  if (this.svg) {
    this.appendSymbol(content);
  }

  this.content.push(content);

  return DEFAULT_URI_PREFIX + id;
};

/**
 *
 * @param content
 * @param template
 * @returns {Element}
 */
Sprite.prototype.wrapSVG = function (content, template) {
  var svgString = template.replace(contentPlaceHolder, content);

  var svg = new DOMParser().parseFromString(svgString, 'image/svg+xml').documentElement;
  var importedSvg = importSvg(svg);

  if (this.browser.name !== 'ie' && this.urlPrefix) {
    baseUrlWorkAround(importedSvg, DEFAULT_URI_PREFIX, this.urlPrefix);
  }

  return importedSvg;
};

Sprite.prototype.appendSymbol = function (content) {
  var symbol = this.wrapSVG(content, Sprite.symbolTemplate()).childNodes[0];

  this.svg.querySelector('defs').appendChild(symbol);
  if (this.browser.name === 'firefox') {
    FirefoxSymbolBugWorkaround(this.svg);
  }
};

/**
 * @returns {String}
 */
Sprite.prototype.toString = function () {
  var wrapper = document.createElement('div');
  wrapper.appendChild(this.render());
  return wrapper.innerHTML;
};

/**
 * @param {HTMLElement} [target]
 * @param {Boolean} [prepend=true]
 * @returns {HTMLElement} Rendered sprite node
 */
Sprite.prototype.render = function (target, prepend) {
  target = target || null;
  prepend = typeof prepend === 'boolean' ? prepend : true;

  var svg = this.wrapSVG(this.content.join(''), Sprite.spriteTemplate());

  if (this.browser.name === 'firefox') {
    FirefoxSymbolBugWorkaround(svg);
  }

  if (target) {
    if (prepend && target.childNodes[0]) {
      target.insertBefore(svg, target.childNodes[0]);
    } else {
      target.appendChild(svg);
    }
  }

  this.svg = svg;

  return svg;
};

module.exports = Sprite;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MobileHelper = (function () {
    function MobileHelper() {
    }
    MobileHelper.isMobile = function () {
        var mq = window.matchMedia(MobileHelper.mobileMQ);
        return mq.matches;
    };
    MobileHelper.isMobileOrTablet = function () {
        var mq = window.matchMedia(MobileHelper.tabletMQ);
        return mq.matches;
    };
    return MobileHelper;
}());
// Values should match bootstrap-variables.less
MobileHelper.mobileMQ = '(max-width: 767px)'; // @screen-xs-max
MobileHelper.tabletMQ = '(max-width: 1024px)'; // @screen-sm-max
exports.MobileHelper = MobileHelper;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map