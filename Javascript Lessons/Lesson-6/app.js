//! Array.from() -> arrayden yeni bir array yaradir 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// let newArr = Array.from(arr, (item) => item + 2)
// console.log(newArr);

//! flatten array => arrayin icindeki arraylari ozune birlesdirir

// let arr = [
//     1, 2, 3, 4, 
//     [5, 6, 7,
//         [8, 9,10, 
//             [11, 12, 13]
//         ]
//     ]
// ]

// let flattenArr = arr.flat(Infinity)
// console.log(flattenArr);

//! Destructuring

//? array destructuring

// let arr = ['shehla', 21, false]

// let name = arr[0]
// let age = arr[1]
// let isStudent = arr[2]

// let [name, _, isStudent] = arr
//      |           |
//     arr[0]      arr[2]

//? object destructuring

// let obj = {
//     name: 'shehla',
//     age: 21,
//     isStudent: false,
//     hobbies: ['music', 'sport'],
//     'dfcgvhb dfgh': false,
//     example: 'sdxfcgvhb'
// }

// let userName = obj.name
// let userAge = obj.age

// let example = obj["dfcgvhb dfgh"]

//! rest oparator(...)
// let {
//     name,
//     isStudent: student,
//     example,
//     ...obj2
// } = obj

// console.log(student);

//! Math methods => abs, ceil, floor, round, random, max, min, pow, sqrt
//? Math --> riyazi emeliyyatlar aparmaq ucun kitabxana (obyekt)

// console.log(Math.PI);
// console.log(Math.abs(-12345));

//? random -> 0 ile 1 arasinda reqemler qaytarir

// function getRandomElement(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

//? max, min

// let maxElement = Math.max(1, 2, 3, 4, 6)
// let minelement = Math.min(1, 2, 3, 4, 6)

// let max = Math.max() // -Infinity
// let min = Math.min() // Infinity

//? pow

// console.log(Math.pow(2, 3), 2 ** 3);

//? sqrt

// console.log(Math.sqrt(4));
// console.log(Math.sqrt(9));

//! Date object

// let currentDate = new Date().getTime() / 86400000

// let customDate = new Date(2024, 0, 1, 0, 0, 0, 0).getTime() / 86400000

// let differenceBetweenDates = Math.floor(Math.abs(currentDate - customDate))

// console.log(currentDate.getDate(), currentDate.getDay());
// console.log(currentDate);
// console.log(customDate);
// console.log(differenceBetweenDates);

//! String methods
//! Stringler immutable elementlerdir 

//? length
// console.log('asdfghwe'.length);

//? charAt()

// let str = 'string'

// console.log(str.charAt(3));
// console.log(str.charCodeAt(3));

//? includes
// let email = 'email@example.com'
// console.log(email.includes('@'));

//? startsWith()
//? endsWith()

// let str = 'String example sentence'

// console.log(str.startsWith('s', 15));

// let fileFormats = ['example.jpg', 'example.txt', 'example.txt', 'sdxfcgvh.jpg']

// fileFormats.forEach(format => {
//     if (format.endsWith('jpg')) {
//         console.log(format);
//     }
// })

//? toLowerCase()
//? toUpperCase()

// let str = 'String example sentence'

// console.log(str.toLowerCase().startsWith('s'));
// console.log(str.toUpperCase());

//? slice
//? substring => sondan baslayib basha gede bilir

// let str = 'String example sentence'

// console.log(str.slice());
// console.log(str.slice(-3));
// console.log(str.slice(19, 3));

// console.log(str.substring(0, 19));
// console.log(str.substring(19, 6));

//? repeat()

// let str = 'string '
// console.log(str.repeat(3));

//? replace()

// let str = 'string methods'

// console.log(str.replace('string', 'array'));

//? split()

// let str = 'string methods'

// console.log(str.split(''));

//? trim()

// let str = '        '

// console.log(str.trim().length);