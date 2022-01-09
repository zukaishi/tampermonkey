// ==UserScript==
// @name         zukaishi-google-link-change
// @namespace    zukaishi-google-link-change
// @version      0.1
// @description  try to take over the world!
// @author       zukaishi
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        https://*.google.com/*
// @match        http://localhost/*
// ==/UserScript==

(function() {
    'use strict';
    console.log("table start")
    let element_tr = document.getElementsByClassName('googleui-table-row')
    console.log(element_tr)
    console.log(element_tr.length)
    console.log(element_tr[0])
    element_tr[0].value = '<tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>'
    console.log("table end")

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