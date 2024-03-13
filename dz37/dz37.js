// 1Измените программу, которая будет выводить только ключи объекта на консоль.

// const obj = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 30,
//     e: "another string"
// };
// for (let key in obj) {
//       console.log('key', key);
// }

// 2) Напишите программу, которая перебирает свойства объекта и удаляет свойства, значение которых равно null. const obj = {
//     a: 10,
//     b: null,
//     c: "string",
//     d: null,
//     e: "another string"
//     };

// const obj2 = {
// a: 10,
//     b: null,
//     c: "string",
//     d: null,
//     e: "another string"
//     };
//     for (let key in obj2) {
//         if (obj2[key] === null) {
//             delete obj2[key];
//         }
//     }

//     console.log(obj2);


// 3) Напишите программу, которая проверяет, содержит ли объект определенное свойство.


// const obj3 = {
//     a: 10,
//     b: null,
//     c: "string",
//     d: null,
//     e: "another string",
//     v:'a'

// };

// function hasProperty(obj3, property) {
//     return property in obj3;
// }

// console.log(hasProperty(obj3, 'a')); // Вернет true
// console.log(hasProperty(obj3, 'z')); // Вернет false





// 4) Напишите программу, которая находит среднее значение числовых элементов массива. Чтобы найти среднее значение, вы должны сперва суммировать
//  эти значения и поделить сумму на количество значений
// const numbers = [1, 2, 3, 4, 5];
// function findAverage(array) {
//     let sum = 0;
//     let count = 0;


//     for (let i = 0; i < array.length; i++) {

//         if (typeof array[i] === 'number') {
//             sum += array[i];
//             count++;
//         }
//     }


//     if (count === 0) {
//         return "Массив не содержит числовых элементов";
//     }


//     const average = sum / count;
//     return average;
// }


// console.log("Среднее значение числовых элементов массива:", findAverage(numbers));

// 5) Вывести все ключи и значения массива, содержащего списки студентов по классам.
// const studentsByClass = [
//     ["1A", ["Alice", "Bob", "Charlie"]],
//     ["2B", ["David", "Emily", "Frank"]],
//     ["3C", ["Grace", "Henry", "Ivy"]]
//     ];
//     Вывод: Class: 1A - Alice, Bob, Charkie


const studentsByClass = [
    ["1A", ["Alice", "Bob", "Charlie"]],
    ["2B", ["David", "Emily", "Frank"]],
    ["3C", ["Grace", "Henry", "Ivy"]]
    ];
    
    for (let [className, student] of Object.entries(studentsByClass)) {
            const studentList = student.join(',');
            console.log(`Class  ${className} `, studentList);
        }