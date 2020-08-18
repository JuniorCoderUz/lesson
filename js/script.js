"use strict";
let numberOfFilms;


let infoOne,
  questionOne,
  questionTwo,
  num = 0,
  questionGenres;


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    personalMovieDB.count = +prompt("How many films have you seen?", 1);
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("How many films have you seen?", 1);
    }
  },
  rememberMyFilm: () => {
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
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count <= 10) {
      alert("You watching too few tv");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("You're classic spectator");
    } else if (personalMovieDB.count >= 30) {
      alert("You're watch tv a fun");
    } else {
      alert("Sorry try again");
    }

  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMovieDB.private) {
      personalMovieDB.private = false;
    } else {
      personalMovieDB.private = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      //   questionGenres = prompt(`You are favorite genre at number ${i}`);
      //   if (questionGenres !== null && questionGenres !== '') {
      //     personalMovieDB.genres[i - 1] = questionGenres;
      //   }
      //   else {
      //     i--;
      //   }
      questionGenres = prompt(`Please enter you're favorite genres after commas`).toLowerCase;

      if (questionGenres !== null && questionGenres !== '') {
        personalMovieDB.genres = questionGenres.split(', ');
        personalMovieDB.genres.sort();
      }
      else {
        i--;
      }
    }
    personalMovieDB.genres.forEach(function (value, indexNum) {
      console.log(`Favorite genre ${indexNum + 1} - ${value}`);
    });
  }
};