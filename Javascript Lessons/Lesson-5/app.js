//! Array methods ardi -> forEach, map, fill, concat, sort, find, findindex, findLastIndex, filter, reduce, some, every, reverse, join, indexOf, lastIndexOf, includes, isArray

// ? forEach, map

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.forEach(function (element, index, array) {
// console.log(index, element);
// console.log(array);
// })

// for (let i = 0; i < array.length; i++) {
//i -> index
//array[i] -> item
// }

//? map -> geriye array qaytarir serte uygun
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let mappedArray = array.map((element, index, array) => {
//     return element * 3
// })

// ? fill

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.fill('array', 2, 5)

// ? concat

// let array = [1, 2, 3, 4]
// let array2 = [10, 9, 8]

// console.log(array.concat('array', 'array2'));
// console.log(array.concat(array2));

// ? sort => in place

// let array = ['h', 'i', 'd', 'j', 'k', 'a', 'c', 'b', 'B', 'A', 'C']
// let array = ['Eli', 'Ali', 'Adil']

// let numbersArray = [-6, 3, 2, 7, 9, -1, -15, 0, -16]

// console.log(array);
// console.log(array.sort());
// console.log(numbersArray.sort(function (a, b) {
//     return a - b //kicikden -> boyuye
//     return b - a //boyukden -> kiciye
// }));

// function compareFn(a, b) {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0
// }

// ? find, findindex, findLastIndex

// let users = [{
//         id: 1,
//         name: "Mary"
//     },
//     {
//         id: 2,
//         name: "Pete"
//     },
//     {
//         id: 2,
//         name: "Mary"
//     }
// ];

// console.log(users.find((user) => user.id === 2));

// let findIndexelement = users.findIndex(item => item.name === 'Mary')
// let findLastIndexelement = users.findLastIndex(item => item.name === 'Mary')

// console.log(findIndexelement);
// console.log(findLastIndexelement);

// ? filter => return [] qaytarir

// let users = [{
//         id: 1,
//         name: "Mary"
//     },
//     {
//         id: 2,
//         name: "Pete"
//     },
//     {
//         id: 2,
//         name: "Mary"
//     }
// ];

// let filteredArray = users.filter((item) => item.name === 'dxfchgvh')
// console.log(filteredArray);

// ? reduce => geriye bir deyer qaytarir

// let array = [1, 2, 3, 45]

// let sum = array.reduce(function (acc, current) {
//     return acc + current

// 0 + 1 acc
// 1 + 2 acc
// 3 + 3
// 6 + 45
// }, 0)

// console.log(sum);

// ? some, every

// let arr = [1, 3, 5]
// let arr2 = [1, 3, 5, 4]

// console.log('Some: ', arr.some(value => value % 2 === 0));
// console.log('Every: ', arr2.every(value => value % 2 === 0));

// ? reverse -> eksine cevirir
// ? join -> stringe cevirir

// let array = ['h', 'e', 'l', 'o']

// console.log(array.reverse());
// console.log(array.join('-'));

// ? indexOf, lastIndexOf

// let names = ['Eli', 'Dilber', 'Refi', 'Gulcin', 'Eli', 'Sefa', 'Ramil']

// console.log(names.indexOf('Eli', 5));
// console.log(names.indexOf('Eli'));

// console.log(names.lastIndexOf('Eli'));
// console.log(names.lastIndexOf('sdxfcgvhb'));

// ?  includes

// let email = 'email@gmail.com'

// console.log(email.includes('@'));

// let array = [1, 2, 3, 'aszdxfg', false, NaN]

// console.log(array.includes(33456));
// console.log(array.indexOf(234567));

// console.log(array.includes(NaN));
// console.log(array.indexOf(NaN)); // NaN tapmir

// ? isArray
// let num = 234567
// let str = 'dfhgfhj'
// let arr = []
// console.log(Array.isArray(num));
// console.log(Array.isArray(str));
// console.log(Array.isArray(arr));


//! Math methods -> abs, ceil, floor, round, random, max, min, pow, sqrt