// const films = [
//     {
//         name: 'Titanic',
//         rating: 9
//     },
//     {
//         name: 'Die hard 5',
//         rating: 5
//     },
//     {
//         name: 'Matrix',
//         rating: 8
//     },
//     {
//         name: 'Some bad film',
//         rating: 4
//     }
// ];

// // function showGoodFilms(arr) {
// //     return arr.filter(film => film.rating >= 8);
// // }
// // const top = showGoodFilms(films);
// // console.log(top);

// // function showListOfFilms(arr) {
// //     return films.map(item => item.name).join(', ')
// // }
// // console.log(showListOfFilms(films));


// function setFilmsIds(arr) {
//     return arr.map((film, i) => {
//         film.id = i;
//         return film;
//     });
// }
// console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//     return arr.every(item => item.id || item.id === 0)
// }
// console.log(checkFilms(tranformedArray));

const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 }
];

function getPositiveIncomeAmount(e) {
    return e.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);

};


function getTotalIncomeAmount(i) {
    if (i.some(item => item.amount < 0)) {
        return i.reduce((acc, curr) => acc + curr.amount, 0)
    } else {
        return getPositiveIncomeAmount(i);
    }
};
console.log(getTotalIncomeAmount(funds));