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

while (true) {
  while (true) {
    questionOne = prompt("One of films that you've seen recently", '');
    if (questionOne != null && questionOne != '' && questionOne.length < 50) {
      infoOne = "DO";
      break;
    }
    else {
      alert("Sorry Try Again");
      continue;
    }
  }

  while (true) {
    questionTwo = prompt(`How do you rank the film - ${questionOne}`);
    if (questionTwo != null, questionTwo != '') {
      infoOne += "NE";
      break;
    } else {
      alert("Sorry Try Again");
      continue;
    }

  }

  if (personalMovieDB.count <= 10) {
    alert("You watch too little TV");
  } else if (personalMovieDB.count >= 20) {
    alert("You're classic spectator");
  } else if (personalMovieDB.count > 30) {
    alert("You're a movie fan");
  } else {
    alert("Error 404 Try again");

  }

  continue;
}
personalMovieDB.movies["questionOne"] = questionTwo;

console.log(personalMovieDB);
console.log(infoOne);
