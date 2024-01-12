// // Место для первой задачи
// function sayHello(name) {
//    return `Привет, ${name}!`
// }
// console.log(sayHello('Андрей'));

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//    return [number - 1, number, number + 1]
// }
// console.log(returnNeighboringNumbers(5));

// // Место для третьей задачи
// function getMathResult(num, times) {
//    if (typeof (times) !== 'number' || times <= 0) {
//       return num;
//    }

//    let str = '';

//    for (let i = 1; i <= times; i++) {
//       if (i === times) {
//          str += `${num * i}`;
//          // Тут без черточек в конце
//       } else {
//          str += `${num * i} ---`;
//          // Это тоже самое, что и
//          // str = str + num * i + "---"
//       }
//    }

//    return str;
// }

// getMathResult(10, 5);