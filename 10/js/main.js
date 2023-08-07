"use strict";
function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

learnJS("Javascript", function() {
	console.log("Я прошел этот урок!");
});

function numbersElemArrToPower(arr, power) {
	if(!Array.isArray(arr)) {
		return "Вы добавили не массив";
	}
	let newArr = [];
	let lastLengthElem = arr.length - 1;
	for(let i = 0; 0 <= lastLengthElem; lastLengthElem--, i++) {
		newArr[i] = arr[lastLengthElem] * power;
	}
	return newArr;
}
function getNumbers(somethingString, arr, power) {
	console.log(somethingString);
	console.log(numbersElemArrToPower(arr, power));
}
getNumbers("I like something anything numbers, like: ", [123, 32, 21, 43], 3);
