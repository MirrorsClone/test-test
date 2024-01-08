// задача 1
let numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', 'начальный текст');
console.log(numberOfFilms);

// задача 2
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   pivat: false
};

// Задание 3
const movieOne = prompt('Один из послендних просмотренных фильмов?', 'silent hill');
filmRating = prompt('На сколько оцените его?', '10');
movieTwo = prompt('Один из послендних просмотренных фильмов?', 'silent hill 2');
filmRatingTwo = prompt('На сколько оцените его?', '5');



personalMovieDB.movies[movieOne] = filmRating;
personalMovieDB.movies[movieTwo] = filmRatingTwo;
console.log(personalMovieDB);




