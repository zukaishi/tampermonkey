// ==UserScript==
// @name         zukaishi-google-link-change
// @namespace    zukaishi-google-link-change
// @version      0.1
// @description  try to take over the world!
// @author       zukaishi
// @match        https://github.com/zukaishi
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match    https://*.google.com/*
// ==/UserScript==

(function() {
    'use strict';
   console.log("google-link-change")

        alert("google-link-change1")

    var targNode    = document.getElementById ("gNO89b");
        alert("google-link-change2")
    targNode.classList.remove ("disabled");
    alert("google-link-change4")
    targNode.classList.add ("enabled");

    alert("google-link-change3")
})();
