// !BOM => Browser Object Model
// !DOM => Document Object Model

// ?BOM => Browser Object Model
// console.log('Example console.log')
// console.warn('Example console.warn')
// console.error('Example console.error')

// !Variable declaration => var, let, const
// ? var 

// var myMessage; //declaration
// myMessage = 'example' //initialization

// var myMessage = 'example 2'
// console.log(myMessage);

// ? let
// let secondMessage = 'Example let'
// secondMessage = 12345678
// console.log(secondMessage);

// !multiline declaration
// let number = 2,
//     str = 'asdfgh',
//     bool = false,
//     numberTwo = 123456

// ? const
// const PI = 3.14
// PI = 2
// console.log(PI);

// !Hoisting
// console.log(myMessage);
// var myMessage = 'message 1'
// let myMessage = 'message 1'

//! JS-də dəyişənlərin adlandırılması
// 1. Variable must start with a letter and underscore(_) or $
// 2. Variables cannot contain spaces
// 3. Variables must be in camelCase
// 4. Variables cannot be the same with reserved keywords

// ! Data types => Primitive types, Reference types
// ? Primitive types => string, number, bigint, undefined, null, boolean, symbol
// ? Reference types => object --> function, array

// ? 1. string
// let str = 'string'
// let str = "string"
// let userName = 'user'
// let str = `Hello ${userName}`
// let str = 'Hello ' + userName

// console.log(str);

// ? 2. number
// let str = '12345678'
// let number = 1234567
// console.log(typeof number);
// console.log(typeof str);

// ? 3. bigint
// let number = 123234562345672345632456n
// console.log(typeof number);

// ? 4. undefined
// var myVariable = undefined;
// console.log(typeof myVariable);

// ? 5. null
// let myNull = null;
// console.log(myNull);
// console.log(typeof myNull);

// ? 6. boolean
// let isStudent = false
// console.log(isStudent);
// console.log(typeof isStudent);

// ? 7. symbol
// let mySymbol = Symbol(undefined)
// console.log(mySymbol);
// console.log(typeof mySymbol);

//! Give message to user => alert
//! Getting data from user =>  prompt, confirm

// ? alert
// let alertMessage = alert('Give message to user')
// console.log(alertMessage);

// ? prompt --> string deyer qaytarir
// let promptMessage = prompt('Write your age', 21)
// console.log(promptMessage);

// ? confirm --> boolean deyer qaytarir
// let confirmMessage = confirm('Are you sure you want to continue?')
// console.log(confirmMessage);

// !Conditional statement --> if/else; if/else if/ else

// let isStudent = true
// let age = '12'

// ! == -> loose equality
// ! === -> strict equality

// if (age === '12') {
//     console.log('Your age is 12');
// } else {
//     console.log('Your age is not 12');
// }

// let isStudent = confirm('Are you student?')
// let gpaScore = prompt('What is your GPA?')

// if (isStudent && gpaScore >= 81) {
//     console.log('Your GPA is exactly good');
// } else if (isStudent && gpaScore < 81) {
//     console.log('Your GPA is not bad');
// } else {
//     alert('You have not permission to continue')
// }

// ! && --> and
// ! || --> or