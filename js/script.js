const numberOfFilms = +prompt("How many films have you seen?");

const questionOne = prompt("One of films that you've seen recently","");
const questionTwo = prompt(`How do you rank the film - ${questionOne}`);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {
    questionOne: questionTwo
  },
  actors: {},
  genres: [],
  private: false
};

