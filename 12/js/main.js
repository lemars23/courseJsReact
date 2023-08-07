"use strict";

let arr = [11, 22, 33, 44, 55];

let names = ["Alex", "John", "Smith", "Alisher"];


function numbersSum() {
	let numbers = prompt("Вставьте числа через +", "").split("+").map(string => +string);
	let res = 0;
	for (let elem of numbers) {
		res += elem;
	}
	return `Сумма: ${res}`;
}

// console.log(names.sort());

// console.log(names.join("-"));

// console.log(numbersSum());

// names.forEach(function (elem, i){
// 	console.log(`Элемент №${i} со значением ${elem}`);
// });

// let i = 1;
// for (let elem of arr) {
//     console.log(`${i}: ${elem}`);
//     i++;
// }

// arr.pop();
// arr.push(312);

// arr.shift();
// arr.unshift(112);

