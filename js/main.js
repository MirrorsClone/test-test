// Задача 1
let numberOfFilms;

function start() {
   numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
   }
}

start();
// Задача 2
let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   pivat: false
};

function detectPersonalLevel() {
   if (parseInt(personalMovieDB.count) < 10) {
      alert('Просмотрено довольно мало фильмов')
   } else if (parseInt(personalMovieDB.count) >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель')
   } else if (parseInt(personalMovieDB.count) >= 30) {
      alert('Вы киноман')
   } else {
      alert('error 2000')
   }
}
detectPersonalLevel();

// Задание 3

function rememberMyFilms() {
   let i = 1;

   while (i <= 2) {
      const movieOne = prompt('Один из послендних просмотренных фильмов?'),
         filmRating = prompt('На сколько оцените его?');
      if (movieOne === null || filmRating === null || filmRating === '' || movieOne === '' || movieOne.length > 50 || filmRating > 50) {
         i--;
      } else {
         personalMovieDB.movies[movieOne] = filmRating;
      };
      i++;
   };
};
rememberMyFilms();


function writeYourGenres() {
   for (let i = 1; i <= 3; i++) {
      const a = prompt(`Ваш любимый жанр под номером ${i}`)
      personalMovieDB.genres[i - 1] = a;
   }
}
writeYourGenres();

function showMyDB() {
   if (personalMovieDB.pivat === false) {
      console.log(personalMovieDB);
   }
}
showMyDB();


