"use strict";
let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
	}
}
start();

let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for(let i = 0;i < 2;) {
		let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
		let scoreFilm = +prompt("На сколько оцените его?", "");
		if(lastViewedFilm !== "" && scoreFilm !== "" && !isNaN(scoreFilm) && scoreFilm !== 0 && lastViewedFilm !== null && lastViewedFilm.length < 50) {
			personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
			console.log("for - done");
			i++;
		} else {
			console.log("for - error");
		}
	}
}
// rememberMyFilms();

function detectPersonalLevel() {
	if(personalMovieDB["count"] < 10) {
		alert("Просмотрено довольно мало фильмов");
	} else if(personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30) {
		alert("Вы классический зритель");
	} else if(personalMovieDB["count"] > 30) {
		alert("Вы киноман");
	} else {
		alert("Произошла ошибка");
	}
}
detectPersonalLevel();

function showMyDB (hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

function writeYourGenres() {
	for(let i = 0, j = 1;i < 3;) {
		let loveGenre = prompt(`Ваш любимый жанр под номером ${j}`, "");
		if(loveGenre !== "" && loveGenre !== null) {
			personalMovieDB["genres"][i] = loveGenre;
			i++;
			j++;
		} else {
			console.log("for - error");
		}
	}
}
writeYourGenres();

showMyDB();
