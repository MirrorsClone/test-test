// let personalMovieDB = {

//    count: 0,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: true,

//    toggleVisibleMyDB: function () {
//       if (personalMovieDB.privat === false) {
//          personalMovieDB.privat = true;
//       } else {
//          personalMovieDB.privat = false
//       }
//    },

//    start: function () {
//       personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?');
//       while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//          personalMovieDB.count = prompt('Сколько фильмов Вы уже посмотрели?');
//       }
//    },

//    detectPersonalLevel: function () {
//       if (parseInt(personalMovieDB.count) < 10) {
//          alert('Просмотрено довольно мало фильмов');
//       } else if (parseInt(personalMovieDB.count) >= 10 && personalMovieDB.count <= 30) {
//          alert('Вы классический зритель');
//       } else if (parseInt(personalMovieDB.count) >= 30) {
//          alert('Вы киноман');
//       } else {
//          alert('error 2000');
//       }
//    },

//    rememberMyFilms: function () {
//       let i = 1;

//       while (i <= 2) {
//          const movieOne = prompt('Один из послендних просмотренных фильмов?'),
//             filmRating = prompt('На сколько оцените его?');
//          if (movieOne === null || filmRating === null || filmRating === '' || movieOne === '' || movieOne.length > 50) {
//             i--;
//          } else {
//             personalMovieDB.movies[movieOne] = filmRating;
//             i++;
//          };
//       };
//    },

//    writeYourGenres: function () {
//       for (let i = 1; i <= 3; i++) {
//          const a = prompt(`Ваш любимый жанр под номером ${i}`)
//          if (a === null || a === '') {
//             i--;
//          } else {
//             personalMovieDB.genres[i - 1] = a;
//          }
//       }
//    },

//    showMyDB: function () {
//       if (personalMovieDB.privat === false) {
//          console.log(personalMovieDB);
//       }
//       personalMovieDB.genres.forEach((item, i) => {
//          console.log(`Любимый жанр #${i + 1} - это ${item}`)
//       })
//    },

// };
// personalMovieDB.start();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();
// alert(`Вы посмотрели: ${personalMovieDB.count} фильма.\nПросмотренные фильмы: ${JSON.stringify(personalMovieDB.movies, null, 2)}\nЖанры: ${JSON.stringify(personalMovieDB.genres, null, 2)}`)