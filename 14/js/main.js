"use strict";
const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
};

function isBudgetEnough(data) {
	let totalArea = 0;
	for(let key in data.shops) {
		totalArea += data.shops[key].length * data.shops[key].width;
	}
	let totalVolume = totalArea * data.height;

	if(data.budget - (totalVolume * data.moneyPer1m3) >= 0) {
		return "Бюджета достаточно";
	} else {
		return "Бюджета недостаточно";
	}
}

isBudgetEnough(shoppingMallData);

function addLength(str) {
	let newArr = [];
	let splitArr = str.split(" ");
	let i = 0;
	for (let item of splitArr) {
		let lengthItem = item.length;
		newArr[i] = `${item} ${lengthItem}`;
		i++;
	}
	return newArr;
}

console.log(addLength("you will win"));
	