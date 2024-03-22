
// Задание 1
// Напишите функцию, которая найдёт сумму квадратных корней элементов массива и округлит её до двух знаков после запятой
// [1,2,3,4,5] --> 8.382332347441762 --> 8.38



// let arr = [1, 2, 3, 4, 5];
// function sumSquare(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += Math.sqrt(array[i]);
//     }
//     return parseFloat(sum.toFixed(2));
// }

// let result = sumSquare(arr);
// console.log(result); 

// Задание 2
// Напишите функцию на проверку если ли в массиве есть два одинаковых элемента подряд.
// [1, 2, 3, 3, 4, 5] --> true
// [1,2,3] --> false
// ['hello', 'my', 'my', 'friend'] --> true

//  let massiv =[1, 2, 3, 3, 4, 5];
//  let massiv2 =[1, 2, 3,  4, 5];


//  function checkMassiv(array) {

//       for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] === array[i + 1]) {
//             return true;
//  }
// }
// return false;
// };
// console.log( massiv,checkMassiv(massiv));
// console.log( massiv2,checkMassiv(massiv2));

// 3 Напишите функцию, которая принимает в себя строку и посчитает сколько в ней гласных букв.
// В строке будут только русские слова.
// Гласных букв - десять: а, у, о, и, э, ы, я, ю, е, ё
// 'привет' --> 2


// let str = 'привет';

// function countVowels(str) {

//     let findVowels = /[ауоиеёэыяю]/gi;

//     let matches = str.match(findVowels);

//     return matches ? matches.length : 0;
// }


// let vowelsCount = countVowels(str);
// console.log(str, vowelsCount);




// Задание 4(дополнительно)
// Напишите функцию, которая реализует функциональность метода filter. Функция принимает массив и callback.
// Например если мы фильтруем массив на чётные числа c помощью filter так:
// const arr = [1, 2, 3, 4, 5] 
// arr.filter(el => el % 2 === 0) --> [2, 4]
// То наша функция должна делать то же самое:
// bizdinFilter(arr, callback) --> [2, 4]


const arr = [1, 2, 3, 4, 5];

function bizdinFilter(array, callback) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}


const filteredArray = bizdinFilter(arr, function(el) {
    return el % 2 === 0;
});


console.log(filteredArray); 
