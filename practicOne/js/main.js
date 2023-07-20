"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


// let i = 0;
// while(i < 3) {
// 	let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
// 	let scoreFilm = +prompt("На сколько оцените его?", "");
// 	if(lastViewedFilm !== "" && scoreFilm !== "" && !isNaN(scoreFilm) && scoreFilm !== 0 && lastViewedFilm !== null && lastViewedFilm.length < 50) {
// 		personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
// 		console.log("while - done");
// 		i++;
// 	} else {
// 		console.log("while - error");
// 	}
// }	

// let i = 0;
// do {
// 	let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
// 	let scoreFilm = +prompt("На сколько оцените его?", "");
// 	if(lastViewedFilm !== "" && scoreFilm !== "" && !isNaN(scoreFilm) && scoreFilm !== 0 && lastViewedFilm !== null && lastViewedFilm.length < 50) {
// 		personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
// 		console.log("do while - done");
// 		i++;
// 	} else {
// 		console.log("do while - error");
// 	}
// } while (i < 3);

// for(let i = 0;i < 3;) {
// 	let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
// 	let scoreFilm = +prompt("На сколько оцените его?", "");
// 	if(lastViewedFilm !== "" && scoreFilm !== "" && !isNaN(scoreFilm) && scoreFilm !== 0 && lastViewedFilm !== null && lastViewedFilm.length < 50) {
// 		personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
// 		console.log("for - done");
// 		i++;
// 	} else {
// 		console.log("for - error");
// 	}
// }

if(personalMovieDB["count"] < 10) {
	alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30) {
	alert("Вы классический зритель");
} else if(personalMovieDB["count"] > 30) {
	alert("Вы киноман");
} else {
	alert("Произошла ошибка");
}
console.log(personalMovieDB);
