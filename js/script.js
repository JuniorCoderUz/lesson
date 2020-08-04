'use strict';
const numberOfFilms = +prompt("How many films have you seen?", 1);

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

do {
  questionOne = prompt("One of films that you've seen recently", '');
  questionTwo = prompt(`How do you rank the film - ${questionOne}`);
  if (questionOne != null && questionOne != '' && questionOne.length < 50 && questionTwo != null && questionTwo != '') {
    personalMovieDB.movies["questionOne"] = questionTwo;
    console.log("DONE");
    num++;
  } else {
    alert("Sorry Try again");
    continue;
  }
  if (personalMovieDB.count > 10) {
    alert("You watching too few tv");
  } else if (personalMovieDB.count < 20) {
    alert("You're classic spectator");
  } else if (personalMovieDB.count > 30) {
    alert("You're watch tv a fun");
  } else {
    alert("Sorry try again");
  }

} while (num < 3);