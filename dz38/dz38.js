// 1) Добавьте к объекту свойство age, получите его через prompt
 let userData = {
    name: "John"};
    console.log(userData);


 userData.age= prompt('Enter your age');
 

//3
var keyToDelete = prompt("Выберите ключ который хотите удалить");
  
  
if (keyToDelete in userData) {
  delete userData[keyToDelete];
  console.log( keyToDelete, "удалить с обьекта");
} else {
  console.log( keyToDelete, "ключ не найден");
}

console.log("обновленный объект", userData);


//4
userData.address = {
        country: "Россия",
        city: "Москва",
        street: "Красная площадь"
    };

    //5
    console.log( 'Последнее обновление',userData);

 // 2) Добавьте свойство underage c булевым значением, получаем значение через confirm
 

//  let userData = {
//     name: "John"};


// var isUnderage = confirm("Are you underage?");

// var person = {
//   underage: isUnderage
// };
// console.log(userData);
// console.log("Underage status:", person.underage);


// 3) C помощью prompt получите ключ объекта. С помощью метода delete удалите это свойство с объекта

// Создаем объект

//   let userData={
//     name: "John",

// };
  
 
//   var keyToDelete = prompt("Выберите ключ который хотите удалить");
  
  
//   if (keyToDelete in userData) {
//     delete userData[keyToDelete];
//     console.log( keyToDelete, "удалить с обьекта");
//   } else {
//     console.log( keyToDelete, "ключ не найден");
//   }

//   console.log("обновленный объект", userData);
  // 4) Добавьте к объекту свойство address, которая в свою очередь является объектом со свойствами: country, city, street. 
//   Постарайтесь использоваться несколько вариантов добавления чтобы закрепить каждый метод


//1

// let userData = {
//         name: "John"};

// userData.address = {
//     country: "Россия",
//     city: "Москва",
//     street: "Красная площадь"
// };

// console.log(userData);


//2





// userData['address'] = {
//     country: "Россия",
//     city: "Москва",
//     street: "Красная площадь"
// };

// console.log(userData);


// //3
// let userData  = {

//   address: {
//       country: "Россия",
//       city: "Москва",
//       street: "Красная площадь"
//   }
// };

// console.log(userData);


// 5) В консоле выведите все значения включая свойство в address
