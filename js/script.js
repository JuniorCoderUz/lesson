'use strict';
let numberOfFilms;
function start() {
  numberOfFilms = +prompt("How many films have you seen?", 1);
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many films have you seen?", 1);
  }
}

start();


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
let infoOne,
  questionOne,
  questionTwo,
  num = 0;

function rememberMyFilm() {
  do {
    questionOne = prompt("One of films that you've seen recently", '');
    questionTwo = prompt(`How do you rank the film - ${questionOne}`);
    if (questionOne != null && questionOne != '' && questionOne.length < 50 && questionTwo != null && questionTwo != '') {
      personalMovieDB.movies["questionOne"] = questionTwo;
      console.log("done");
      console.log("DONE");
      num++;
    } else {
      alert("Sorry Try again");
      continue;
    }
  } while (num < 3);
}

rememberMyFilm();

function detectPersonalLevel() {
  if (personalMovieDB.count <= 10) {
    alert("You watching too few tv");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You're classic spectator");
  } else if (personalMovieDB.count >= 30) {
    alert("You're watch tv a fun");
  } else {
    alert("Sorry try again");
  }

}

detectPersonalLevel();


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.private);


function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`You are favorite genre at number ${i}`);
  }
}

writeYourGenres();

console.log(infoOne);