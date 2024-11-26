// Задача 1.
// Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// console.log(week[4]);


// Задача 2.
// Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.

// const user = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 18,
// }

// alert(`${user.surname}-${user.name}-${user.age}`);


// Задача 3.
// Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры

// const user = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 18,
// }

// user.middleName = prompt('Введите отчество');
// alert(`${user.surname}-${user.name}-${user.middleName}-${user.age}`);


//Задача 4.
// Удалите свойство surname

// const user = {
//     name: 'Ivan',
//     surname: 'Ivanov',
//     age: 18,
// }

// user.middleName = prompt('Введите отчество');
// delete user.surname;
// alert(`${user.name}-${user.middleName}-${user.age}`);


// Задача 5.
// Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];

// const obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i];
// }

// console.log(obj);


// Задача 6.
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат

// const obj = {
//     x: 1, 
//     y: 2, 
//     z: 3
// };

// for (const value in obj) {
//     console.log(obj[value] ** 2); 
// }


// Задача 7.
// const obj = {
// key1: {
//     key1: 1,
//     key2: 2,
//     key3: 3,
//     },
//     key2: {
//     key1: 4,
//     key2: 5,
//     key3: 6,
//     },
//     key3: {
//     key1: 7,
//     key2: 8,
//     key3: 9,
//     },
//     }
//     Найдите сумму элементов приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;
// for (const keyUp in obj) {
//     for (const value in obj[keyUp]) {
//     sum += obj[keyUp][value];
//     }
// }
// console.log(sum);


// Задача 8.
// Создайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// * По желанию, создать 2 подсказки, если пользователь ответил неверно

// const riddles = {
//     question: 'Зимой и летом одним цветом',
//     answer: 'елка',
//     askQuestion() {
//         let word = prompt(this.question);
//         word = word.toLocaleLowerCase();
//         if (word === riddles.answer) {
//             alert('Вы угадали');
//         } else {
//             const word = prompt('Попробуйте еще раз! Зимой и летом одним цветом');
//             if (word === riddles.answer) {
//                 alert('Вы угадали');
//             } else {
//                 alert('Вы не угадали');
//             }
//         }
//     }
// }

// riddles.askQuestion();