// Задача 1. Написать функцию, которой передаем, имя, фамилия и
// возраст, и получаем строку "Привет Иван Петров с
// возрастом 17" (только здесь данные, которые были
// переданы в функцию)

// function helloUser() {
//     let firstName = prompt('Введите имя');
//     let secondName = prompt('Введите фамилию');
//     let age = prompt('Введите возраст');
//     console.log(`Привет ${firstName} ${secondName} с возрастом ${age} лет`);
// }

// helloUser();


// Задача 2. Создайте функцию которая возводит переданное число в
// квадрат

// function sqr(num) {
//     num *= num;          //возвести в степень также можно так: num ** степень
//     return num;
// }

// function printNumber(num) {
//     alert(num);
// }

// let num = prompt('Введите число');
// printNumber(sqr(num));


// Задача 3.Сделайте функцию, которая параметром принимает
// число и проверяет, положительное это число или
// отрицательное. В первом случае пусть функция выводит
// в консоль текст '+++', а во втором '---'.

// function checkNumber(num) {
//     if (num > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function printResult(args) {
//     if (args == true) {
//         console.log('+++');
//     } else {
//         console.log('---');
//     }
// }

// let num = prompt('Введите любое число');
// console.log(num);
// printResult(checkNumber(num));


// Задача 4. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.

// function sumNumber() {
//     let num = Number(prompt('Введите число'));
//     let sum = 0;
//     while(num != 0) {
//         sum += num;
//         num = Number(prompt('Введите число'));
//     }
//     return sum;
// }

// function printResult(num) {
//     console.log(`Сумма введенных чисел равна ${num}`);
// }

// printResult(sumNumber());


// Задача 5. Сделайте функцию, которая параметром принимает число, а
// возвращает квадратный корень из этого числа. С помощью этой
// функции найдите корень числа 3, затем найдите корень числа 4.
// Просуммируйте полученные результаты и выведите их в консоль.

// function sqrt(num) {
//     return num ** (1/2);             //также можно использовать Math.sqrt(num);
// }

// console.log(`Корень из числа 3 равен ${sqrt(3)}`);
// console.log(`Корень из числа 4 равен ${sqrt(4)}`);
// console.log(`Корень из числа 3 равен ${sqrt(3) + sqrt(4)}`);


// Задача 6. Создайте функцию, которая находит минимальное число из 2х
// передаваемых аргументов функции

// function isMin() {
//     let num = Number(prompt('Введите число'));
//     let min = num;
//     while (num != false) {
//         if (num < min) {
//             min = num;
//         }
//         num = Number(prompt('Введите число'));
//     }
//     return min;
// }

// console.log(`Минимальное из введенных ${isMin()}`);


// Задача 7. Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

// function numberDayOfWeek() {
//     let num = Number(prompt('Введите число от 1 до 7'));
//     switch (num) {
//         case 1:
//             console.log('Понедельник');
//             break;
//         case 2:
//             console.log('Вторник');
//             break;
//         case 3:
//             console.log('Среда');
//             break;
//         case 4:
//             console.log('Четверг');
//             break;
//         case 5:
//             console.log('Пятница');
//             break;
//         case 6:
//             console.log('Суббота');
//             break;
//         case 7:
//             console.log('Воскресенье');
//             break;
//         default:
//           console.log('День недели не задан');
//       }
// }

// numberDayOfWeek();


// Задача 8. Написать функцию, которой передаем имя и она возвращает
// приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)

// function timeOfDay() {
//     let currentDate = new Date();
//     let time = new Date();
//     if (time.setHours(6,0,0) < currentDate && time.setHours(11,30,0) > currentDate) {
//         console.log('Доброе утро');
//     } else if (time.setHours(11,31,0) < currentDate && time.setHours(17,0,0) > currentDate) {
//         console.log('Добрый день');
//     } else if (time.setHours(17,1,0) < currentDate && time.setHours(22,0,0) > currentDate) {
//         console.log('Добрый вечер');
//     } else {
//         console.log('Доброй ночи');
//     }
// }

// timeOfDay();