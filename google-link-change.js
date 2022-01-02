// ==UserScript==
// @name         zukaishi-google-link-change
// @namespace    zukaishi-google-link-change
// @version      0.1
// @description  try to take over the world!
// @author       zukaishi
// @match        https://github.com/zukaishi
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        https://*.google.com/*
// ==/UserScript==

(function() {
    'use strict';
    console.log("google-link-change start")
    let element1 = document.getElementsByClassName('gNO89b')
    console.log(element1)
    console.log(element1.length)

    for (let i = 0; i < element1.length; i++) {
        element1.item(i).value = element1.item(i).value + "test";
    }

    let element2 = document.getElementsByClassName('pHiOh')
    console.log(element2)
    console.log(element2.length)

    for (let i = 0; i < element2.length; i++) {
        console.log(element2.item(i).href )
        element2.item(i).href = "https://google.com";
    }
    console.log("google-link-change end")
})();