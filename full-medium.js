// ==UserScript==
// @name         Medium Hackd
// @version      1.00.05
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

let btn = document.getElementById('paywall-upsell-button-upgrade');
let url = 'https://radiant-brushlands-42789.herokuapp.com/' + document.URL.replace(/^https?\:\/\//i, "");
let herokuapp = 'https://radiant-brushlands-42789.herokuapp.com/';
if(btn) {
  btn.childNodes[0].href = herokuapp + document.URL.replace(/^https?\:\/\//i, "");
  btn.childNodes[0].text = 'Full'
  console.log('Redirect to ' + url);
  document.location.href = url;
}

a = document.getElementsByTagName("a");
for(i=0; i<a.length; i++) {
  if(a[i].innerText==="Open in app") {
    console.log(a[i]);
    a[i].href = herokuapp + document.URL.replace(/^https?\:\/\//i, "");
    a[i].innerText = 'Full';
    document.location.href = url;
    break;  
  }
}
