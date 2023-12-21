// ! Falsy deyerler -> 0, '', null, undefined

// let str = '' 
// if(str.length){
//     console.log('String duzdur ');
// } else {
//     console.log('String bosdur');
// }

// let falsy = null //false

// if(falsy) {
//     console.log(null);
// } else {
//     console.log('Falsy is null');
// }

//! Arrays and objects
// ! Javascript-de arrayler dinamikdir
// let arr = ['string', 12, 12n, false, null, undefined]

// let obj = {
//     name: 'John',
//     age: 21,
//     hobby: ['sport', 'music'],
// }

// for (let i in obj) {
//     console.log(obj[i]);
//     console.log(i);
// }

// let arr = [2, 4, 6, 8, 10]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let element of arr) {
//     console.log(element);
// }

// console.log(obj['name']);

//! Nested loops
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10; k++) {
//             console.log(i, j, k);
//         }
//     }
// }

//! Scopes -> global, block, function
//! let, const --> block scope variable 
//! var --> function scope

//! Block scope
// var a = 10

// {
//     {
//         {
//             var a = 5
//         }
//     }
// }

// ? let

// let a = 10

// {
//     let a = 20 
//     {
//         let a = 80
//         console.log(a);
//     }
//     console.log(a);

// }


// let a=10

// {
//     {
//         let a = 20
//         {
//             console.log(a);
//         }
//     }
// }

//! Function scope

// function topla() {
//     var a = 10
//     {
//         {
//             {
//                 console.log(a);
//             }
//         }
//     }
// }


//! DRY --> Don`t Repeat Yourself
//! Functions in Javascript -> function declaration, function expression, arrow functions, callback
//! return -> funksiyanin deyerini qaytarir

//? Declaration 

// let result = sumElements()
// console.log(result);

// function sumElements() {
//     let a = 4
//     let b = 5
//     // console.log(a + b);
//     return a + b
// }

//? Expression
// let result2 = sum()
// console.log(result2);

// let sum = function () {
//     let a = 2
//     let b = 5
//     return a + b
// }

//? parametres and arguments of functions

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(2, 5));
// console.log(sum(3, 5));
// console.log(sum(4, 5));
// console.log(sum(2, 9));

//! Sayisiz argument tutmaq
// ? arguments

// function getElements() {
//     return (arguments);
// }

// console.log(getElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// ? ...args
//! ... --> seperator, spread operator
// let arr = [1, 2, 3, 4, 5, 6, 6, 7]

// function getElements(...args) {
//     return [...args] 
// }

// console.log(getElements(arr, 'string', 12));