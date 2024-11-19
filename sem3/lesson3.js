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