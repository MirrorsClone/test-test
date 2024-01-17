// Место для первой задачи
function firstTask() {
   // Пишем решение вот тут
   for (let i = 5; i < 11; i += 1) {
      console.log(i);
   }
}
firstTask();

// Место для второй задачи
function secondTask() {
   // Пишем решение вот тут
   for (let i = 20; i > 9; i -= 1) {
      console.log(i);

      if (i === 13) {
         break;
      }
   }

}
secondTask();
// Место для третьей задачи
function thirdTask() {
   // Пишем решение вот тут
   for (let i = 2; i < 11; i += 2)
      console.log(i);
}
thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
   // Пишем решение вот тут
   let i = 2;

   while (i <= 16) {
      if (i % 2 === 0) {
         i++;
         continue;
      } else {
         console.log(i);
      }
      i++;
   }
}
fourthTask()
// Место для пятой задачи

function fifthTask() {
   const arrayOfNumbers = [];

   // Пишем решение вот тут

   for (let i = 5; i <= 10; i++) {
      arrayOfNumbers.push(i);
   }


   // Не трогаем
   return arrayOfNumbers;
}
console.log(fifthTask());



// Место для первой задачи
function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];

   // Пишем решение вот тут
   for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i]
   }

   // Не трогаем
   return result;
}

console.log(firstTask())

// Место для второй задачи
function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   // Пишем решение вот тут
   for (let i = 0; i < data.length; i++) {
      if (typeof (data[i]) === 'number') {
         data[i] = data[i] * 2
      } else {
         data[i] = data[i] + ' - done'
      }
   }
   // Не трогаем
   return data;
}
console.log(secondTask());


// Место для первой задачи
function sayHello(name) {
   return `Привет, ${name}!`
}
console.log(sayHello('Андрей'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
   return [number - 1, number, number + 1]
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(num, times) {
   if (typeof (times) !== 'number' || times <= 0) {
      return num;
   }

   let str = '';

   for (let i = 1; i <= times; i++) {
      if (i === times) {
         str += `${num * i}`;
         // Тут без черточек в конце
      } else {
         str += `${num * i} ---`;
         // Это тоже самое, что и
         // str = str + num * i + "---"
      }
   }

   return str;
}

getMathResult(10, 5);

// Место для первой задачи
function calculateVolumeAndArea(number) {
   if (!Number.isInteger(number) || number <= 0) {
      return 'При вычислении произошла ошибка'
   } else {
      let v = number * number * number;
      let p = 6 * (number * number);
      return `Объем куба: ${v}, площадь всей поверхности: ${p}`;
   }
}
console.log(calculateVolumeAndArea(5));  // 'Объем куба: 125, площадь всей поверхности: 150'

console.log(calculateVolumeAndArea(15)); // => 'Объем куба: 3375, площадь всей поверхности: 1350'

console.log(calculateVolumeAndArea(15.5)); // => 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea('15')); // => 'При вычислении произошла ошибка'

console.log(calculateVolumeAndArea(-15)); // => 'При вычислении произошла ошибка'

// Место для второй задачи
function getCoupeNumber(compartmentNumber) {
   if (!Number.isInteger(compartmentNumber) || compartmentNumber < 0) {
      return "Ошибка. Проверьте правильность введенного номера места";
   }

   else if (compartmentNumber == 0 || compartmentNumber > 36) {
      return "Таких мест в вагоне не существует"
   }

   else {

      // return Math.ceil(compartmentNumber/4) // А можно через метод

      for (let i = 1; i <= 9; i++) {
         if (compartmentNumber <= i * 4) {
            return i;
         }
      }
   }
}

console.log(getCoupeNumber(33)); // => 9

console.log(getCoupeNumber(7)); // => 2

console.log(getCoupeNumber(300)); // => "Таких мест в вагоне не существует"

console.log(getCoupeNumber(0)); // => "Таких мест в вагоне не существует"

console.log(getCoupeNumber(7.7)); // => "Ошибка. Проверьте правильность введенного номера места"

console.log(getCoupeNumber(-10)); // => "Ошибка. Проверьте правильность введенного номера места"

console.log(getCoupeNumber('Hello')); // => "Ошибка. Проверьте правильность введенного номера места"


function getTimeFromMinutes(time) {
   if (!Number.isInteger(time) || time < 0 || time > 600) {
      return "Ошибка, проверьте данные";
   }

   else {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      if (hours == 0 || hours >= 5) {
         return `Это ${hours} часов и ${minutes} минут`
      } else if (hours == 1) {
         return `Это ${hours} час и ${minutes} минут`
      } else {
         return `Это ${hours} часа и ${minutes} минут`
      }
   }
}

console.log(getTimeFromMinutes(150)); //=> "Это 2 часа и 30 минут"

console.log(getTimeFromMinutes(50)); //=> "Это 0 часов и 50 минут"

console.log(getTimeFromMinutes(0)); //=> "Это 0 часов и 0 минут"

console.log(getTimeFromMinutes(-150)); //=> "Ошибка, проверьте данные"


const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },

   showAgeAndLangs: function (plan) {
      let i = plan.skills.languages.join(' ');
      return `Мне ${plan.age} и я владею языками: ${i.toUpperCase()}`;
   }

};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); //=> 'Мне 29 и я владею языками: RU ENG'
function showExperience(plan) {

   return plan.skills.exp;
}
console.log(showExperience(personalPlanPeter)) // => '1 month'


function showProgrammingLangs(plan) {
   let result = '';
   for (let nameLangs in plan.skills.programmingLangs) {
      result += `Язык ${nameLangs} изучен на ${plan.skills.programmingLangs[nameLangs]} \n`;
   }
   return result;
}

console.log(showProgrammingLangs(personalPlanPeter)) // => "Язык js изучен на 20% Язык php изучен на 10%"

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length == 0) {
      return `Семья пустая`
   } else {
      let i = arr.join(' ')
      return `Семья состоит из: ${i}`
   }
}

console.log(showFamily(family)); //  => 'Семья состоит из: Peter Ann Alex Linda'



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   for (let key of favoriteCities) {
      console.log(key.toLowerCase(arr));
   }
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
   return str.split('').reverse().join('');
}

console.log(reverse(someString)); //=> 'gnirts egnarts emos si sihT'



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   let str = '';
   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

   arr.forEach(function (curr, i) {
      if (curr !== missingCurr) {
         str += `${curr}\n`;
      }
   });

   // Или
   // for (let i = 0; i < arr.length; i++) {
   //     if (arr[i] === missingCurr) {
   //         continue;
   //     }
   //     str += `${arr[i]}\n`;
   // }

   return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')



const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
}

function isBudgetEnough(data) {

   let totalSquare = 0;
   data.shops.forEach(element => {
      const square = element.width * element.length;
      totalSquare += square;
   });

   const volume = totalSquare * data.height;

   const budgetPayment = volume * data.moneyPer1m3;
   if (data.budget < budgetPayment) {
      console.log('Бюджета недостаточно')
   } else {
      console.log('Бюджета достаточно')
   }
}
isBudgetEnough(shoppingMallData);