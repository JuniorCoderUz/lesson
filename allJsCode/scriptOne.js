"use strict";
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




// const numberOfFilms = +prompt("How many films have you seen?", 1);

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false
// };
// let infoOne,
//   questionOne,
//   questionTwo,
//   num = 0;

// for (let i = 0; i <= 2; i++) {
//   questionOne = prompt("One of films that you've seen recently", '');
//   questionTwo = prompt(`How do you rank the film - ${questionOne}`);
//   if (questionOne != null && questionOne != '' && questionOne.length < 50 && questionTwo != null && questionTwo != '') {
//     personalMovieDB.movies["questionOne"] = questionTwo;
//     console.log("done");
//   }
//   else {
//     alert("Sorry Try Again");
//     i--;
//   }


// }

// if (personalMovieDB.count <= 10) {
//   alert("You watch too little TV");
// } else if (personalMovieDB.count >= 20) {
//   alert("You're classic spectator");
// } else if (personalMovieDB.count > 30) {
//   alert("You're a movie fan");
// } else {
//   alert("Error 404 Try again");
// }

// console.log(personalMovieDB);
// console.log(infoOne);

////////////////////////////////////////////////////////////////

// let someArray = [
//   'cat',
//   'dog',
//   'rat'
// ];

// let a = someArray.length

// while (a > 0) {
//   someArray[a - 1] += 's';
//   a--;
// }
// console.log(someArray)

// for (let a = someArray.length; a > 0; a--) {
//   someArray[a - 1] += 's';
// }
// console.log(someArray)

// for (let bla of someArray) {
//   let s = someArray.indexOf(bla);
//   someArray[s] += 's';
// }

// someArray.forEach((item, index) => {
//   someArray[index] += 's';
// })
// console.log(someArray);


////////////////////////////////////////////////////////////////
/*
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

questionOne = prompt("One of films that you've seen recently", '');

questionTwo = prompt(`How do you rank the film - ${questionOne}`);
*/
