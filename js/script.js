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

for (let i = 0; i <= 2; i++) {
  questionOne = prompt("One of films that you've seen recently", '');
  questionTwo = prompt(`How do you rank the film - ${questionOne}`);
  if (questionOne != null && questionOne != '' && questionOne.length < 50 && questionTwo != null && questionTwo != '') {
    personalMovieDB.movies["questionOne"] = questionTwo;
    console.log("done")
  }
  else {
    alert("Sorry Try Again");
    i--;
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





console.log(personalMovieDB);
console.log(infoOne);

