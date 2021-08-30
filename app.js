// document.write()
// alert()
// console.log()

// document.write('Hello World')
// alert('Hello World')
// variables let,const,var. const cann't be reassigned. let is block score, var is function scope
// Data types number, string, boolean, object, Symbol, null, Undefined
// Object -> Arrays, function, Objects 
// console.log('Hi Everyone');
// console.log("Everyone");

// let name = "Tareq";
// for (let i = 0; i < 5; i++){
//     console.log(name);    
// }

// let fullName = 'Tareq Mahmud'
// console.log(fullName);

// const pi = 3.1415;
// console.log(pi);

// let pi_ = parseInt ('5.2')
// console.log(pi_);
// console.log(typeof (pi_));

// let arr = [1, 2, 3, 4]
// console.log(arr);

// // conventional function
// function sum(a,b) {
//     return a+b
// }

// console.log(sum(5, 7))


// function sayHello(str='user') {
//     console.log('Hello '+str)
// }
// sayHello("Bobby")

// // annonymous function
// const mult = function (val1, val2) {
//     return val1 * val2;
// }

// mult1 = mult(4, 5)
// console.log(mult1)

// // arrow function 

// const div = (num1, num2) => num1 / num2;

// div1 = div(10, 3)
// console.log(div1)

// // Objects
// let dog = {
//     name: 'bull',
//     id: 1,
//     type: 'pitbull',
//     siblings: ['tiger', 'bolt', 'shark'],
//     greet: function greet() {
//         console.log("Ghew Ghew")
//     }
// }

// console.log(dog.name)
// dog.greet()

// Switch statement
// const dice = 5;

// switch (dice) {
//     case 1:
//         console.log('You got 1');
//         break;
//      case 2:
//         console.log('You got 2');
//         break;
//      case 3:
//         console.log('You got 3');
//         break;
//          case 4:
//         console.log('You got 4');
//         break;
//      case 5:
//         console.log('You got 5');
//         break;
//      case 6:
//         console.log('You got 6');
//         break;
//     default:
//         console.log('Dice was not rolled');
// }

// Loops for, while, do while
// for (let i = 0; i < 10; i++){
//     console.log('Game of Thrones ' + i);
// }
// string methods -> length, toUpperCase, toLowerCase, charAt(), indexOf, startswith, slice, trim, includes

// Template Literals // Template literal is dope
// const name = 'john';
// const age = 27;
// // const val =;
// console.log(`Hey my name is ${name} and i am ${age} years old and here is some easy maths 2+2 is ${2 + 2}`);

// Array methods -> length, concat, reverse, unshit(add element at the begining), shift(remove element from the begining), push(add element at last), pop(remove last element), splice(mutates new array and can also remove specific element from array)

// const spnames = ['john', 'harry', 'kabir', 'zayn', 'mikkelsen']
// const sname = spnames.splice(0, 1);
// console.log(sname);
// console.log(spnames);

// Exercise 1
// const names = ['anna', 'bob', 'rick'];
// const lname = 'Ross';
// const fname = [];
// for (let i = 0; i <names.length; i++){
//         fname.push(`${names[i]} ${lname}`)
// }
// console.log(fname);
// console.log(names);

// Exercise 2
// const gas = [10, 20, 30,]
// const food = [30, 50, 100]

// function addTotal(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = arr[i] + sum;
//     }
//     if (sum > 100) {
//         console.log(`You are spending too much dawg!`);
//         return sum;
//     }
//         console.log(`You good bro!!`);
    
//     return sum;
// }

// // console.log(`Your gas bill is ${addTotal(gas)}`);
// // console.log(`Your food bill is ${addTotal(food)}`);

// let bill = {
//     gass: addTotal(gas),
//     bill: addTotal(food),
//     randomBill : addTotal([23,45,67,89])
// }
// console.log(bill);
// console.log(`Hello BRO!!`);

// assigning primitive data type values to another variable and changing the value does not affect the origial value
// assigning non-primitive data type values to another variable and changing the value does  affect the origial value.

// const person = { name: 'bob' }
// // const person2 = person;
// person2 = { ...person };  // not pointing to a value but rather copying it.
// person2.name = 'anna';
// console.log(person.name);
// console.log(person2.name);

// undefined -> javascript cant find the value, null -> developer set the value to null

// if value isn't boolean but it contains some value it returns true else if it is null, it returns false

// Unary operator -> typeof, binary operator -> assignment operator, ternary operator 
// Global Scope, Local scope

// Callback functions // Higher Order Functions -> takes another function as argument and returns a function

// function morning(name) {
//     return `Good Morning ${name.toUpperCase()}`;
// }
// function evening(name) {
//     return `Good evening ${name.toUpperCase()}`;
// }

// function greet(name, cb) {
//     const myName = 'Tareq'
//     console.log(`${cb(name)}, my name is ${myName}`);
// }

// greet('Izzy', morning);
// greet('Romero',evening)

// Powerful array methods -> ForEach, map, filter, Reduce, find

// const numbers = [13, 12, 23, 34, 45, 56, 63, 71]

// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// forEach does not return a new array. Iterates over each item of the array

// const numbers = [13, 12, 23, 34, 45, 56, 63, 71]

// const people =[
//     {
//         name: 'bob',
//         age: '24',
//         profession: 'developer'
//     },

//     {
//         name: 'anna',
//         age: '21',
//         profession: 'Student'
//     },
//     {
//         name: 'susy'
//         , age: '28',
//         profession: 'Manager'
//     }
// ]

// function showPerson(item) {
//     console.log(item.profession.toUpperCase());
// }
// // showPerson(people);
// // people.forEach(showPerson); // forEach using a predefined function

// people.forEach(function (item) {                 // forEach using annonymous function
//     console.log(item.name.toLowerCase());  
// })

// map -> returns a new array, does not change the size of original array, uses value from original array to make new array

// const people =[
//     {
//         name: 'bob',
//         age: 24,
//         profession: 'developer'
//     },

//     {
//         name: 'anna',
//         age: 21,
//         profession: 'Student'
//     },
//     {
//         name: 'susy'
//         , age: 28,
//         profession: 'Manager'
//     }
// ]


// const ages = people.map(function (item) {
//     return item.age;
// })
// console.log(ages);

// const names = people.map(function (item) {
//     return {
//         name: item.name + ' ross',
//         age: item.age + 5,
//         profession : 'Current Profession: ' + item.profession
//     }
// })
// console.log(names)

// const newPeople = people.map(function (item) {
//     return `<h1>${item.name} ${item.profession}</h1>`
// })
// console.log(newPeople)

// document.body.innerHTML = newPeople.join('')

// Filter -> returns a new array, can manipulate the size of new  array, returns based on condition


// const people =[
//     {
//         name: 'bob',
//         age: 24,
//         profession: 'developer'
//     },

//     {
//         name: 'anna',
//         age: 21,
//         profession: 'Student'
//     },
//     {
//         name: 'susy'
//         , age: 28,
//         profession: 'Manager'
//     }
// ]

// const youngpeople = people.filter(function (item) {
//     return item.age <= 25;
// })

// console.log(youngpeople);

// find  returns a single instance / for multiple instance return the first one
// const people =[
//     {
//         name: 'bob',
//         age: 24,
//         profession: 'developer',
//         id:  1
//     },

//     {
//         name: 'anna',
//         age: 21,
//         profession: 'Student',
//         id:  2
//     },
//     {
//         name: 'susy'
//         , age: 28,
//         profession: 'Manager',
//         id:  3
//     }
// ]

// const person = people.find(function (item) {
//     return item.id == 3
// })
// console.log(person);

// reduce - iterates, callback function , reduces to a single value
// 1 parameter ('acc') - total of all calculations 
// 2 parameter ('cur') - current iteration value

//  const people =[
//     {
//         name: 'bob',
//         age: 24,
//         profession: 'developer',
//          id: 1,
//         salary : 500
//     },

//     {
//         name: 'anna',
//         age: 21,
//         profession: 'Student',
//         id: 2,
//         salary : 100
//     },
//     {
//         name: 'susy'
//         , age: 28,
//         profession: 'Manager',
//         id: 3,
//         salary : 300
//     }
// ]

// const total = people.reduce(function (acc,cur) {
//     acc += cur.salary;
//     return acc;
// },0)
// console.log(`total salary: ${total}`);

// Math 

// const n = 4.3333;
// console.log(Math.round(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));
// console.log(Math.sqrt(n));
// console.log(Math.PI);
// console.log(Math.min(1, 2, 2, 3, 4, 5,));

// Date 
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();

// const currentDate = (`Today is ${days[day]}, ${date.getDate()} ${months[month]} ${year}`);

// document.body.innerHTML = currentDate;

//  DOM -> Document Object Model


// select the element that we wanna apply some js on
// apply the js
// Window object -> browser api
// console.dir -> checks the property of node object

// getElementByID('element')
// const v = document.getElementById('title')
// v.style.color = "orange";

// const btn = document.getElementById('btn');
// btn.style.color = 'red';
// btn.style.backgroundColor = 'white';

// // getElementsByTagName // we need to convert the nodelist to array to use array methods on them.

// const fruits = document.getElementsByTagName('h2'); // returns a nodelist
// console.log(fruits);

// const fruitsarr = Array.from(fruits); // converting the nodelist to an array
// fruitsarr.forEach(function (item) {  
//     item.style.color = 'purple';  // applying some style 
// })

// const items = document.getElementsByTagName('li');

// const items1 = [...items];  // converting the nodelist to array using spread operator

// items1.forEach(function (val) {  
//     val.style.color = 'red';
// })
// console.log(items);
// console.log(items1);

// getElementsByClassName  returns node list. convert to array...

// const sclass = document.getElementsByClassName('c1');

// const sclass1 = [...sclass];

// sclass1.forEach(function (item) {
//     item.style.color = '#1B2CC1';
// })

// querySelector-> returns 1 item , querySelectorAll -> returns all the item. can catch any css element

// const sclass = document.querySelector('#id1');

// sclass.style.color = '#CC444B';

// const sclass1 = document.querySelectorAll('.c1');

// sclass1.forEach(function (item) {
//     item.style.color = '#5DB7DE';
// })

// const lchild = document.querySelector('li:last-child');
// console.log(lchild);
// lchild.style.color = '#FAA916';

// childnodes -> returns all the childnodes including whitespace which is treated as a text node

// children
// firstchild
//lastchild

// const fruit = document.querySelector('#fruits');
// const childNodes = fruit.childNodes; // returns all the childnodes incluing blank lines/ text node
// const childs = fruit.children;  // returns the actual child elements
// console.log(childNodes);
// console.log(childs);
// console.log(fruit);
// console.log(fruit.firstChild);
// console.log(fruit.lastChild);

// ParentElement

// const shead = document.querySelector('h2');
// const parent = shead.parentElement;
// parent.style.color = 'red';

// PreviousSibling // nextsibling // returns whitespace

// const first = document.querySelector('.first-item');

// const nxtsib = first.nextElementSibling; // returns ignoring the text node
// console.log(nxtsib);
// const nxtnxtsib = nxtsib.nextElementSibling;
// console.log(nxtnxtsib.previousElementSibling);


