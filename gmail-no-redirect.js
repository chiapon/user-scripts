// ==UserScript==
// @name         Gmail No Redirect
// @version      1.00.01
// @description  Remove "data-saferedirecturl" attributes in A tags
// @author       Alex Lin
// @include      https://mail.google.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @grant        GM.info
// ==/UserScript==

var counter = 0;
function links() {
  var links = document.getElementsByTagName("a");
  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    if(link.hasAttribute("data-saferedirecturl")) {
      link.removeAttribute("data-saferedirecturl");
    }
    if(link.hasAttribute("onmousedown")) {
      link.removeAttribute("onmousedown");
      if(link.removeEventListener) {
        link.removeEventListener("mousedown", link.onmousedown, false);
      } else if(link.detachEvent) {
        link.detachEvent("onmousedown", link.onmousedown);
      }
    }
  }
}

function run() {
  links();
}

setTimeout(function() {
  window.addEventListener('click', function() {
    if(counter === 0) {
      setTimeout (function() { run(); counter = 0; }, 500);
    }
    counter++;
  });
  window.addEventListener('scroll', function() {
    if(counter === 0) {
      setTimeout (function() { run(); counter = 0; }, 500);
    }
    counter++;
  });

  var counter = 0;
  run();
},2000);
