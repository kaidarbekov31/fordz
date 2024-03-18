// Задание 1
// Напишите функцию, которая принимает в себя строку(параметр) и убирает из неё все пробелы. (возвращает строку без пробелов)
// "    hello my friends   " --> "hellomyfriends"


// let user = prompt('Enter next');
// console.log(user);
// console.log(user.replaceAll(' ', ''));



// Задание 2
// Напишите функцию, которая принимает массив и возвращает его последний элемент


// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.slice(-1));


// Задание 3
// Напишите функцию, которая принимает два массива, соединяет их и возвращает


// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = ['xedw', NaN, undefined]


// console.log(arr);
// console.log(arr2);


// let arr3 = arr.concat(arr2);

// console.log(arr3);



// Задание 4
// Напишите функцию, которая принимает в себя строку и делает первую букву заглавной
// Например: 'привет' --> 'Привет'

const word = prompt('привет');

function capitalizeFirstLetter(str) {

    if (str.length === 0) return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}

const capitalizedString = capitalizeFirstLetter(word);
console.log(capitalizedString);
