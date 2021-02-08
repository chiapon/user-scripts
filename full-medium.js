// ==UserScript==
// @name         Medium Hackd
// @version      1.00.11
// @downloadURL  https://github.com/chiapon/user-scripts/raw/main/full-medium.js
// @updateURL    https://github.com/chiapon/user-scripts/raw/main/full-medium.js
// @description  Unlock Medium article limitation by leveraging Medium Hackd server https://radiant-brushlands-42789.herokuapp.com/
// @author       Alex Lin
// @include      https://medium.com/*
// @include      https://codeburst.io/*
// @include      https://*.medium.com/*
// @include      https://*.gitconnected.com/*
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


var herokuapp = 'https://radiant-brushlands-42789.herokuapp.com/';
var url = herokuapp + document.URL.replace(/^https?\:\/\//i, "");

lnk = document.getElementById('regwall-sign-in-link');
if(lnk) {
  lnk.childNodes[0].innerHTML = '<a href="'+url+'">Full story</a>';
}

btn = document.getElementById('paywall-upsell-button-upgrade');
if(btn) {
  btn.childNodes[0].href = url;
  btn.childNodes[0].text = 'Full story';
}
