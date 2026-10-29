// ==UserScript==
// @name         Lenso Unlock Titles
// @namespace    AlexCoding4Fun
// @version      1.00.03
// @description  Remove the locked class from every div on Lenso.
// @author       Alex Lin
// @match        https://lenso.ai/*
// @match        https://www.lenso.ai/*
// @include      https://lenso.ai/*
// @include      https://www.lenso.ai/*
// @downloadURL  https://raw.githubusercontent.com/chiapon/user-scripts/main/lenso-unlock-titles.js
// @updateURL    https://raw.githubusercontent.com/chiapon/user-scripts/main/lenso-unlock-titles.js
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  function unlockTitles() {
    var elements = document.querySelectorAll('div.locked');

    for (var i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('locked');
    }

    if (elements.length > 0) {
      console.log('[Lenso Unlock Titles] Unlocked ' + elements.length + ' element(s).');
    }
  }

  console.log('[Lenso Unlock Titles] Script is running at ' + window.location.href);
  unlockTitles();
  window.setInterval(unlockTitles, 3000);
})();
