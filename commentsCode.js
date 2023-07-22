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