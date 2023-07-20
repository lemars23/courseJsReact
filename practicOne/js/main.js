"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


let i = 0;

// while(i < 3) {
// 	let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
// 	let scoreFilm = +prompt("На сколько оцените его?", "");
// 	if(lastViewedFilm !== "" && lastViewedFilm !== null && lastViewedFilm.length < 50) {
// 		personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
// 		i++;
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
