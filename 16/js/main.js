"use strict";

const wrapper = document.querySelector(".wrapper"),
	header = document.querySelector(".header"),
	headerNav = document.querySelector(".header-nav"),
	nav = document.querySelector(".nav"),
	navLink = document.querySelectorAll(".header-link"),
	main = document.querySelector(".main"),
	mainHeader = document.querySelector(".main-header"),
	mainPhar = document.querySelectorAll(".main-phar"),
	footer = document.querySelector(".footer");

header.style.backgroundColor = "#c3c3c3";
headerNav.style.display = "flex";
headerNav.style.alignItems = "center";
headerNav.style.justifyContent = "space-evenly";
navLink.forEach(item => {
	item.style.display = "inline-flex";
	item.style.alignItems = "center";
	item.style.justifyContent = "center";
	item.style.height = "30px";
	item.style.width = "100px";
});

mainHeader.style.cssText = "text-align:center;color: red;letter-spacing: 0.2em;";

// create element

let sectionSomething = document.createElement("section");
sectionSomething.textContent = "My name is Alisher";
sectionSomething.style.backgroundColor = "red";
sectionSomething.style.color = "#fff";
sectionSomething.style.fontWeight = "bolder";
sectionSomething.classList.add("someText");
footer.before(sectionSomething);

// usually text

let someText = document.createTextNode("Что-то просто так");
main.append(someText);

// add items
let divOne = document.createElement("div"),
	divTwo = document.createElement("div"),
	divThree = document.createElement("div"),
	divFour = document.createElement("div");

divOne.textContent = "Div #1";
divTwo.textContent = "Div #2";
divThree.textContent = "Div #3";
divFour.textContent = "Div #4";

divOne.classList.add("divs");
divTwo.classList.add("divs");
divThree.classList.add("divs");
divFour.classList.add("divs");

main.append(divOne);
document.querySelector(".nav-ul").prepend(divTwo);
footer.before(divThree);
document.querySelectorAll(".main-phar")[2].after(divFour);

document.querySelectorAll("nav-li")[1].replaceWith(navLink);