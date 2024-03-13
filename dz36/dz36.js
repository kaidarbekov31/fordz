
// 1) Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }

let i = 0;
while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}


// 2) Выведите простые числа с массива let arr = [1, 3, 4, 6, 9, 11, 24, 17]

let arr = [1, 3, 4, 6, 9, 11, 24, 17];

function isPrime(num) {
    if (num <= 1) return false; // 1 не является простым числом
    if (num <= 3) return true; // 2 и 3 - простые числа
    if (num % 2 === 0 || num % 3 === 0) return false; // проверяем деление на 2 и 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

let primeNumbers = arr.filter(num => isPrime(num));

console.log("Простые числа из массива:", primeNumbers);

// 3) Используя цикл выведите массив в обратном порядке из let arr = [1, 3, 4, 6, 9, 11, 24, 17], вывод: [17, 24, 11, 9, 6, 4, 3, 1]
let arr2 = [1, 3, 4, 6, 9, 11, 24, 17];
let reversedArr = [];

for (let i = arr2.length - 1; i >= 0; i--) {
    reversedArr.push(arr2[i]);
}

console.log(reversedArr);

// 4) Создайте цикл while, который выводит в консоль числа от 3 до 7.

let num = 3;
while (num <= 7) {
    console.log(num);
    num++;
}

// 5) Напишите программу, которая находит первое четное число в массиве и выводит его. Если четных чисел нет, выведите сообщение Нет четного числа

let arr3 = [1, 3, 5, 7, 9, 2, 4, 6, 8]; 
let found = false; // Флаг, который показывает, найдено ли четное число

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] % 2 === 0) { // Проверяем, является ли текущий элемент четным
        console.log("Первое четное число в массиве:", arr3[i]);
        found = true; 
        break; 
    }
}

if (!found) {
    console.log("Нет четного числа");
}

// 6) Напишите программу, которая выводит все числа от 1 до 10, кроме числа 5.
for (let i = 1; i <= 10; i++) {
    if (i !== 5) {
        console.log(i);
    }
}
