// ==UserScript==
// @name         Medium Hackd
// @version      1.00.04
// @downloadURL  https://github.com/chiapon/user-scripts/raw/main/full-medium.js
// @updateURL    https://github.com/chiapon/user-scripts/raw/main/full-medium.js
// @description  Unlock Medium article limitation by leveraging Medium Hackd server https://radiant-brushlands-42789.herokuapp.com/
// @author       Alex Lin
// @include      https://medium.com/*
// @include      https://towardsdatascience.com/*
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @grant        GM.info
// ==/UserScript==


if(document.getElementById('paywall-upsell-button-upgrade')) {
  let url = 'https://radiant-brushlands-42789.herokuapp.com/' + document.URL.replace(/^https?\:\/\//i, "");
  console.log('Redirect to ' + url);
  document.location.href = url
}
