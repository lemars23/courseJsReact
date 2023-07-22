"use strict";

// getSomething();
// function getSomething() {
// 	console.log("get something in string");
// }

// function getArgText(text) {
// 	if(typeof(text) === "string") {
// 		console.log("String: " + text);
// 	} else {
// 		console.warn("text isn't string!!!");
// 	}
// }
// getArgText("name");

// function calc(action, arr) {
// 	if(typeof(action) === "string" && Array.isArray(arr)) {
// 		let count;
// 		switch(action) {

// 		case "умножение":
// 			count = 1;
// 			for(let i = 0; i < (arr.length); i++) {
                
// 				count *= arr[i];
// 			}
// 			return count;
// 		case "сумма":
// 			count = 0;
// 			for(let i = 0; i < (arr.length); i++) {
                
// 				count += arr[i];
// 			}
// 			return count;
// 		default:
// 			console.log("Неизвестное действие");
// 			break;
// 		}
// 	} else {
// 		console.warn("Error!!!");
// 	}
// }
// console.log(calc("сумма", [3, 5, 2, 4]));

let name = "Alex";
function createName() {
	let name = "Alisher";
	console.log(name);
}
createName();
function changeName() {
	name = "John";
	console.log(name);
}
changeName();
function getSomethingCount() {
	let count = 123;
}
// console.log(count);

function getSurname() {
	return "Smagulov";
}
const mySurname = getSurname();
console.log(mySurname);

let sisterName = function () {
	return "Dilnaz";
};
console.log(sisterName());

