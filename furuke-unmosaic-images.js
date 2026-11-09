// ==UserScript==
// @name         Furuke Unmosaic Images
// @namespace    AlexCoding4Fun
// @version      1.00.02
// @description  Remove mosaic, kit-mosaic, and kit-mosaic-medium classes from every image on Furuke.
// @author       Alex Lin
// @match        https://furuke.com/*
// @match        https://www.furuke.com/*
// @include      https://furuke.com/*
// @include      https://www.furuke.com/*
// @downloadURL  https://raw.githubusercontent.com/chiapon/user-scripts/main/furuke-unmosaic-images.js
// @updateURL    https://raw.githubusercontent.com/chiapon/user-scripts/main/furuke-unmosaic-images.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  function unmosaicImages() {
    var elements = document.querySelectorAll('img.mosaic, img.kit-mosaic, img.kit-mosaic-medium');

    for (var i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('mosaic', 'kit-mosaic', 'kit-mosaic-medium');

      if (elements[i].classList.length === 0) {
        elements[i].removeAttribute('class');
      }
    }

    if (elements.length > 0) {
      console.log('[Furuke Unmosaic Images] Updated ' + elements.length + ' image(s).');
    }
  }

  console.log('[Furuke Unmosaic Images] Script is running at ' + window.location.href);
  unmosaicImages();

  var observer = new MutationObserver(unmosaicImages);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });
})();
