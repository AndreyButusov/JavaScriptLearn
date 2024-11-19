// Задача 1.

function cube(num) {
    return num ** 3;
}

let result = cube(2) + cube(3);
console.log(result);


// Задача 2.

function calcSalaryAfterTax(salary) {
    return salary * 0.87;
}

let input = prompt('Введите число:');
let number = parseFloat(input);
if (isNaN(number)) {
console.log('Значение задано неверно');
} else {

let afterTax = calculateSalaryAfterTax(number);
console.log(`Размер заработной платы за вычетом налогов равен
${afterTax}`);
}


// Задача 3. 

function findMax(a, b, c) {
    return Math.max(a, b, c);
}

let num1 = parseFloat(prompt('Введите первое число:'));
let num2 = parseFloat(prompt('Введите второе число:'));
let num3 = parseFloat(prompt('Введите третье число:'));

let max = findMax(num1, num2, num3);
console.log('Максимальное значение:', max);


// Зачада 4.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a > b ? a - b : 0;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b !== 0 ? a / b : 'Деление на ноль недопустимо';
}

console.log(add(2, 6)); 
console.log(subtract(5, 3)); 
console.log(multiply(4, 7)); 
console.log(divide(10, 2)); 
console.log(divide(10, 0));