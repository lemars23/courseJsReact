"use strict";

function getTimeFromMinutes(number) {
	let hours = Math.floor(number / 60);
	let minutes = number % 60;
    
	return `Это ${hours} часа и ${minutes} минут`;
}

// console.log(getTimeFromMinutes(150));

function findMaxNumber(n1, n2, n3, n4) {
	console.log(n1);
}

// console.log(findMaxNumber());


function returnString(str) {
	let arrString = str.split(/-|_/);
	let lengthArr = arrString.length;
	let res = "";
	res += arrString[0];
	for(let i = 1; i < lengthArr; i++) {
		let firstLatterCase = arrString[i][0].toUpperCase();
		let anotherCases = arrString[i].substring(1);
		res += firstLatterCase + anotherCases;
	}
	return res;
}

let str = returnString("the-Stealth-Warrior");
console.log(str);