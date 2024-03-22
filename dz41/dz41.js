// Задание 1 (используйте замыкание)
// Напишите функцию makeCounter, которая создает счетчик, который увеличивается на единицу при каждом вызове.


// function makeCounter() {
//     let count = 0;

//     return function() {
//       return ++count;
//     };
//   }

//   const counter = makeCounter();

//   console.log(counter());
//   console.log(counter()); 
//   console.log(counter()); 

// Задание 2
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. Да, именно таким образом, используя двойные круглые скобки (не опечатка).sum(1)(2) = 3
// sum(5)(-1) = 4

// function sum(a) {
//     return function(b) {
//       return a + b;
//     };
//   }


//   console.log(sum(1)(2)); 
//   console.log(sum(5)(-1)); 

// Задание 3
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

function sumTo(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumTo(n - 1)
    }
}
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));