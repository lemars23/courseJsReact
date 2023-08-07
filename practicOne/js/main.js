"use strict";

let personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,

	start: function() {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
		}
	},

	rememberMyFilms: function () {
		for(let i = 0;i < 2;) {
			let lastViewedFilm = prompt("Один из последних просмотренных фильмов?", "").trim();
			let scoreFilm = +prompt("На сколько оцените его?", "");
			if(lastViewedFilm !== "" && scoreFilm !== "" && !isNaN(scoreFilm) && scoreFilm !== 0 && lastViewedFilm !== null && lastViewedFilm.length < 50) {
				personalMovieDB["movies"][lastViewedFilm] = scoreFilm;
				console.log("for - done");
				i++;
			} else {
				console.log("for - error");
			}
		}
	},

	detectPersonalLevel: function() {
		if(personalMovieDB["count"] < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if(personalMovieDB["count"] >= 10 && personalMovieDB["count"] <= 30) {
			alert("Вы классический зритель");
		} else if(personalMovieDB["count"] > 30) {
			alert("Вы киноман");
		} else {
			alert("Произошла ошибка");
		}
	},

	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		}
	},

	writeYourGenres: function() {
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

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i + 1} - это ${item}`);
		});
	},

	toggleVisibleMyDB: function() {
		if(personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};
