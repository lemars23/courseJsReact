"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
let personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastOneViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
let scoreOneFilm = +prompt("На сколько оцените его?", "");
let lastTwoViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
let scoreTwoFilm = +prompt("На сколько оцените его?", "");
let lastThreeViewedFilm = prompt("Один из последних просмотренных фильмов?", "");
let scoreThreeFilm = +prompt("На сколько оцените его?", "");
personalMovieDB["movies"][lastOneViewedFilm] = scoreOneFilm;
personalMovieDB["movies"][lastTwoViewedFilm] = scoreTwoFilm;
personalMovieDB["movies"][lastThreeViewedFilm] = scoreThreeFilm;
console.log(personalMovieDB);