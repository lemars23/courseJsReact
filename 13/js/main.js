"use strict";
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	},
	showAgeAndLangs: function(obj) {
		let string = `Мне ${obj.age} и я владею языками: `,
			languages = obj.skills.languages;
		for(let key in languages) {
			string += `${languages[key].toUpperCase()} `;
		}
		return string;
	}
};


// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

// console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
	let string = "";
	let programmingLangs = plan.skills.programmingLangs;
	for(let key in programmingLangs) {
		string += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return string;
}

// console.log(showProgrammingLangs(personalPlanPeter));

const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
	if(arr.length > 0) {
		return "Семья состоит из: " + arr.join(" ");
	}
	return "Семья пуста";
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
	let newArr = [];
	arr.forEach(function(item,i) {
		newArr[i] = item.toLowerCase();
	});
	for(let key of newArr) {
		console.log(`${key}`);
	}
}

// console.log(standardizeStrings(favoriteCities));

const someString = "This is some strange string";

function reverse(str) {
	let string = "";
	for(let i = str.length - 1; i >= 0; i--) {
		string += str[i];
	}
	return string;
}

// console.log(reverse(someString));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
	if(arr.length === 0) {
		return "Нет доступных валют";
	}
	let bothCurr = [...baseCurrencies, ...additionalCurrencies];

	bothCurr.forEach(function(item, i){
		if(item === missingCurr) {
			bothCurr.splice(i, 1);
		}
	});

	return "Доступные валюты:\n" + bothCurr.join("\n");
}

console.log(availableCurr(baseCurrencies, "USD"));