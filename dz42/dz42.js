
1

// 1) Напишите функцию getFullName, которая принимает объект user с полями firstName и lastName,
//  и возвращает полное имя. Если какое-либо из полей отсутствует, используйте значения по умолчанию.



function getFullName(user) {

    const firstName = user.firstName || 'John';
    const lastName = user.lastName || 'Doe';


    return `${firstName} ${lastName}`;
}


const user = {
    firstName: 'Alice',
    lastName: 'Smith'
};
console.log(getFullName(user));

const user2 = {
    firstName: 'Bob'
};
console.log(getFullName(user2));

const user3 = {};
console.log(getFullName(user3)); 

//  2 Напишите функцию printCoordinates, которая принимает объект point с полями x и y, и выводит координаты точки.


function printCoordinates(point) {
    console.log(`Координаты точки: (${point.x}, ${point.y})`);
}

const point = {
    x: 5,
    y: 10
};
console.log( printCoordinates(point));

// У вас есть вложенный массив const data = {

//     products : [
  
//       { id: 1, name: 'Product 1' },
  
//       { id: 2, name: 'Product 2' }
  
//     ]
//   Напишите функцию, используя деструктуризацию выводите название продуктов:
//   name: Product1
//   name: Product2

const data = {
    products: [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' }
    ]
  };
  
  function printProductNames(data) {
    data.products.forEach(({ name }) => {
      console.log(`name: ${name}`);
    });
  }
  
 
   console.log(printProductNames(data)); 
  