"use strict";
const Counties = {
	Kazahstan: {
		capital: "Astana",
		population: "19 million",
		location: "Central Asia"
	},
	China: {
		capital: "Peking",
		population: "1.412 billion",
		location: "Central and Eastern Asia"
	},
	Japan: {
		capital: "Tokyo",
		population: "125.7 million",
		location: "Northeast or East Asia"
	},
	"South Korea": {
		capital: "Seoul",
		population: "51.74 million",
		location: "East Asia" 
	}
};

// for(let country in Counties) {
// 	console.log(country);
// 	for(let countryKey in Counties[country]) {
// 		console.log(`${countryKey} => ${Counties[country][countryKey]}`);
// 	}
// }

// delete Counties["South Korea"].population;
// console.log(Counties["South Korea"]);

// console.log(Counties.Kazahstan.capital);
// console.log(Counties["China"]["capital"]);

const myProfile = {
	name: "Alisher",
	surname: "Smagulov",
	age: 21,
	city: "Astana",
	height: "170 cm",
	weight: "61 kg",

	getName: function() {
		return "My name is Alisher";
	},

	getSurname: function() {
		return "My surname's Smagulov";
	}
};

const {name, surname, age, city, height, weight} = myProfile;

console.log(city);

// console.log(myProfile.getSurname());

// console.log(Object.keys(myProfile).length);
// console.log(Object.keys(myProfile));