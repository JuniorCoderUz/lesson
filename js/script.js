/*const numberOfFilms = +prompt("How many films have you seen?");

const questionOne = prompt("One of films that you've seen recently", "");
const questionTwo = prompt(`How do you rank the film - ${questionOne}`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

personalMovieDB.movies["questionOne"] = questionTwo;

console.log(personalMovieDB);
*/
/////////////////////////////////////////////////////////////////////////////
/*
Новая тема про операторы
*/
const num = 100;

//Это оператор if-else для проверки кокогото конкретного ответа
if (num == 30) {
  console.log("Не правдо");
} else if (num == 90) {
  console.log('Нимношко')
} else if (num == 100) {
  console.log("Ты качок");
} else {
  console.log("Ты долб@#&");
}

//Это тернарный оператор он сокрашает код
(num == 100) ? console.log("You tell true") : console.log("Ты гонд0#");

//Это switch case для проверки до#уя придложений
switch (num) {
  case 30:
    console.log("Ты ни#уя не угодал");
    break;
  case 100:
    console.log("Ахты сосунок как ты угодаль");
    break;
  default:
    console.log("Пшолвон!!!");
    break;
}