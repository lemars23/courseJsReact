"use strict";

const headerTag = document.getElementById("header");

// console.log(headerTag);

const spanTag = document.getElementsByTagName("span");

// console.log(spanTag);

const headerLink = document.getElementsByClassName("header-link");

// console.log(headerLink[2]);

const main = document.querySelector(".main");

// console.log(main);

const listLink = document.querySelectorAll(".list-link");

listLink.forEach(function(item) {
	console.log(item.textContent);
});