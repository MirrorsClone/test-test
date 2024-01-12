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


// // Место для первой задачи
// function firstTask() {
//    // Пишем решение вот тут
//    for (let i = 5; i < 11; i += 1) {
//       console.log(i);
//    }
// }
// firstTask();

// // Место для второй задачи
// function secondTask() {
//    // Пишем решение вот тут
//    for (let i = 20; i > 9; i -= 1) {
//       console.log(i);

//       if (i === 13) {
//          break;
//       }
//    }

// }
// secondTask();
// // Место для третьей задачи
// function thirdTask() {
//    // Пишем решение вот тут
//    for (let i = 2; i < 11; i += 2)
//       console.log(i);
// }
// thirdTask();

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//    // Пишем решение вот тут
//    let i = 2;

//    while (i <= 16) {
//       if (i % 2 === 0) {
//          i++;
//          continue;
//       } else {
//          console.log(i);
//       }
//       i++;
//    }
// }
// fourthTask()
// // Место для пятой задачи

// function fifthTask() {
//    const arrayOfNumbers = [];

//    // Пишем решение вот тут

//    for (let i = 5; i <= 10; i++) {
//       arrayOfNumbers.push(i);
//    }


//    // Не трогаем
//    return arrayOfNumbers;
// }
// console.log(fifthTask());



// // Место для первой задачи
// function firstTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const arr = [3, 5, 8, 16, 20, 23, 50];
//    const result = [];

//    // Пишем решение вот тут
//    for (let i = 0; i < arr.length; i++) {
//       result[i] = arr[i]
//    }

//    // Не трогаем
//    return result;
// }

// console.log(firstTask())

// // Место для второй задачи
// function secondTask() {
//    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//    const data = [5, 10, 'Shopping', 20, 'Homework'];

//    // Пишем решение вот тут
//    for (let i = 0; i < data.length; i++) {
//       if (typeof (data[i]) === 'number') {
//          data[i] = data[i] * 2
//       } else {
//          data[i] = data[i] + ' - done'
//       }
//    }
//    // Не трогаем
//    return data;
// }
// console.log(secondTask());




