// Задание 1
// Напишите функцию, которая принимает в себя строку(параметр) и убирает из неё все пробелы. (возвращает строку без пробелов)
// "    hello my friends   " --> "hellomyfriends"


// let user = prompt('Enter next');
// console.log(user);

// function user2(user) {
//     return user.replaceAll(' ', '')
// }
// let result = user2(user)
// console.log(result);





// Задание 2
// Напишите функцию, которая принимает массив и возвращает его последний элемент


// let arr = [1, 2, 3, 4, 5, 6];
// function newArr(array) {
//     if (array.length === 0) {
//         return undefined
//     } else {
//         return array[array.length - 1];
//     }
// }
//     let lastArr = newArr(arr);
//     console.log(lastArr);


// Задание 3
// Напишите функцию, которая принимает два массива, соединяет их и возвращает


let arr = [1, 2, 3, 4, 5, 6];
let arr2 = ['xedw', NaN, undefined]
console.log(arr, arr2);

function sumArr(arr,arr2) {
    return arr.concat(arr2)
}
let sum = sumArr(arr,arr2)
console.log(sum);




// Задание 4
// Напишите функцию, которая принимает в себя строку и делает первую букву заглавной
// Например: 'привет' --> 'Привет'

// const word = prompt('привет');

// function capitalizeFirstLetter(str) {

//     if (str.length === 0) return str;

//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const capitalizedString = capitalizeFirstLetter(word);
// console.log(capitalizedString);
