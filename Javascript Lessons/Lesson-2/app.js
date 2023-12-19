// !Type conversions
// 1, 2, 3, 4, 5, 6, 7, 8, 9 -> integer
// 1.234, -> float

//? string -> number

// let str = '20'
// console.log(str + 2);

// str = parseInt(str)
// str = parseFloat(str)
// str = Number(str)

// console.log(str + 2);
// console.log(typeof str);

// console.log(typeof +str);

// let str = 'fgvhbkjdsc'
// console.log(Number(str));

// let str = ''
// console.log(Number(str));

// ! NaN -> Not a Number

// ? number->string, boolean->string

// let number = 2345
// let bool = false

// console.log(typeof number.toString());
// console.log(number.toString());
// console.log(bool.toString());

// ? boolean->number
// let bool = true
// let bool = false

// console.log(Number(bool));

// ? String concat

// let str1 = 'Javascript'
// let str2 = 'Lesson'
// let concat = `${str1} ${str2}`
// console.log(concat);

//! Operators -> +, -, *, /, %, >, <, >=, <=, ++, --, +=, -=, *=, /=, &&, ||, !, ?, **, ==, ===, :

// ?Math operators -> +, -, *, /, %

//* Cixma, toplama

// let bool = true;
// let number = 1234
// console.log(number + bool);
// console.log(bool + number);
// console.log(bool + '2345');

// let bool = false;
// let number = 1234

// let emptyStr = ''
// let str = 'dfcgvhbj'

// console.log(str - number);
// console.log(bool - number);

// * Vurma

// let emptyStr = '12'
// let str = 'dfcgvhbj'

// console.log(emptyStr * 12);
// console.log(str * 12);

// let bool = true;
// console.log(bool * 14);

// * Bolme
//? / -> tam hisseye gore bolme
//? % -> qaliq hisse (module)

// let number = 129
// console.log(parseInt(129 / 4));
// console.log(129 / 5);
// console.log(129 % 5);

// let emptyStr = '12'
// let str = 'dfcgvhbj'

// console.log(str / 3);

// !increment and decrement -> ++, --
// ++a once artirir, sonra deyeri menimsedir 
// a++ once menimsedir, sonra deyeri  artirir
// a-- once azaldir, sonra deyeri menimsedir
// --a once menimsedir, sonra deyeri azaldir

// let a = 10

// console.log(++a); //  11
// console.log(a++); // 11 -> a + 1
// console.log(a); // 12

// console.log(a--); 
// console.log(--a)
// console.log(a);

// let a = 40

// a += 3 // a = a + 3
// a -= 3 // a = a - 3

// console.log(a);

// ! ustu quvvet derecesi
// let a = 3
// let b = 4
// console.log(a ** b);

// !Conditional statements ardi

// let a = 129

// if(a < 10) {
//     console.log('a kicikdir 10');
// } else if(a === 10) {
//     console.log('a beraberdir 10');
// } else {
//     console.log('a boyukdur 10');
// }

// ! ternary statements, ternary operators
// a < 10 ?
//     console.log('a kicikdir 10') :
//     a === 10 ?
//     console.log('a beraberdir 10') :
//     console.log('a boyukdur 10');

// ? Switch, case
// let a = 38

// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//         console.log('a kicikdir 10');
//         break;
//     case 10:
//         console.log('a beraberdir 10')
//         break;
//     default:
//         console.log('a boyukdur 10')
//         break;
// }

//? statements -> looplar, if/else, switch/case ve s.
//? expressions -> bize deyer qaytarir (true/false , riyazi emeliyyatin cavabi ve s.)

// ! Loops -> for, do while, while, for in, for of

// let arr = [2, 4, 6, 8, 10]
// let arrayLength = arr.length
// console.log(arrayLength);

// for (let i = 1; i <= arrayLength; i++) {
//     console.log(arr[i]);
// }

// let a = 10
// for (let i = 0; i < a; i++) {
//     console.log(i);
// }

// for (let i = a - 1; i >= 0; i--) {
//     console.log(i);
// }

// ? while

// let a = -2

// while (a >= 0) {
//     console.log(a);
//     a--
// }

// ? do/while
// do {
//     console.log(a);
//     a--
// } while (a > 0) {

// }

//! falsy deyerler 