const numberOfFilms = +prompt("How many films have you seen?", 1);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};
for (let i = 0; i < 2; i++) {
  const questionOne = prompt("One of films that you've seen recently", ''),
    questionTwo = prompt(`How do you rank the film - ${questionOne}`);

  if (questionOne != null && questionTwo != null && questionOne != '' && questionTwo != '' && questionOne.length < 50) {
    personalMovieDB.movies["questionOne"] = questionTwo;
    console.log("Done");

  } else {
    alert('Try again');
    console.log("Error 404");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert("You watch too little TV");
} else if (personalMovieDB.count > 10) {
  alert("You are a classic spectator");
} else if (personalMovieDB > 30) {
  alert("You are a movie fun");
} else {
  alert("Please try again");
}

console.log(personalMovieDB);



// */
// /////////////////////////////////////////////////////////////////////////////

/*
// Новая тема про операторы
*/
/* const num = 100;

Это оператор if-else для проверки кокогото конкретного ответа
if (num == 30) {
  console.log("Не правдо");
} else if (num == 90) {
  console.log('Нимношко');
} else if (num == 100) {
  console.log("Ты качок");
} else {
  console.log("Ты долб@#&");
}
*/


// //Это тернарный оператор он сокрашает код
// // (num == 100) ? console.log("You tell true") : console.log("Ты гонд0#");

// //Это switch case для проверки до#уя придложений
// switch (num) {
//   case 30:
//     console.log("Ты ни#уя не угодал");
//     break;
//   case 100:
//     console.log("Ахты сосунок как ты угодаль");
//     break;
//   default:
//     console.log("Пшолвон!!!");
//     break;
// }
let test = 1;

// while (test <= 8) {
//   console.log(test);
//   test++;
// }

// do {
//   console.log(test);
//   test++;
// }
// while (test <= 8);

// let num = 1;

// for (let num = 1; num == 8; num++) {
//   console.log(num);
// }
