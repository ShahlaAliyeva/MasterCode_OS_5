//! Arrow function
// console.log(getElement(3, 5));

// let getElement = (a, b) => {
//     return `${a}, ${b}`
// }

//? tek parametr qebul edende (a) => a bele qeyd olunur
//? tek setr kod varsa {} olmadan birbasa yazmaq olar

// let get = a => `parametr is: ${a}`
// console.log(get(15));

//! Closure


// function outer() {
//     let outerVal = 'outerVal'

//     function inner() {
//         let innerVal = 'innerVal'
//         console.log(outerVal, innerVal);
//     }

//     inner()
//     console.log(outerVal, innerVal);

// }

// outer()

//? Closure - Example 2

// function counterFunc() {
//     let count = 0

//     return function () {
//         return ++count
//     }
// }

// let a = counterFunc()
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());

//! Callback functions

// function sayHello(message, user) {
//     console.log(message, user);
// }

// function getUser(userName) {
//     return userName;
// }

// sayHello('Hello user: ', getUser('Shehla'))
// sayHello('Hello user: ', getUser('Dilber'))

//! IIFE -> Immediately Invoked Function Expression

// (
//     function(a) {
//         console.log(a);
//     }
// )('Argument in IIFE')

//! Array methods -> push, pop, shift, unshift, splice

// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 8] //9 --> 8 
// console.log(newArr.length);

//? push, pop
//? push() -> arrayin sonuna element elave edir => arrayin uzunlugunu qaytarir

// console.log(arr.push('fcgvjhbj', false, 12345, null));

// ? own push function
// function ownPush(arr, ...args) {
//     console.log(arr.length);

//     for (let i = 0; i < args.length; i++) {
//         let lastIndex = arr.length
//         arr[lastIndex] = args[i] //lastIndex = 9 args[i] -> 'fcgvjhbj'
//                                  // lastIndex = 10 args[i] -> false
//     }

//     return arr.length
// }

// console.log(ownPush(newArr, 'new element1', 'new element2', false, true, 1234567));

//? pop() -> arrayin sonundan elemnt cixarir
// let newArr = [1, 2, 3, 4, 5, 6, 7, 'asgdfghjk']

// console.log(newArr.pop());
// console.log(newArr.pop());
// console.log(newArr);

//? shift() -> arrayin ilk elementini cixarir, cixarilan elementi bize qaytarir

// let newArr = [1, 2, 3, 4, 5, 6, 7, 'asgdfghjk']
// console.log(newArr.shift());

//? unshift() -> ilk index`e element elave edir =>  arrayin uzunlugunu qaytarir

// let newArr = [1, 2, 3, 4, 5, 6, 7, 'asgdfghjk']
// console.log(newArr.unshift('dfghjklhdfghj'));


//! splice metodu

// let arr = [1, 2, 3, 4, 5, 6, 7, 'asgdfghjk']

// console.log(newArr.splice(1, 3)); //! 1ci indexdeki elementden baslayir ve 3 element silir 
// console.log(newArr.splice(-3, 3)); //! sondan 3cu elementden baslayir ve 3 element silir 

// console.log(arr.splice(0, 1, 'elvae element', 1234, false)); //! 0-ci indexden baslayir 1 eleemnt silir ve yazilan deyerleri oraya oturur

// console.log(arr.splice(3, 0, 'yeni element', 1234, false)); //! 0-ci indexden baslayir element silmeden yazilan deyerleri oraya oturur

//! slice metodu -> arrayin mueyyen bir hissesini kopyalayir (shallow copy)

// let arr = [1, 2, 3, 4, 5, 6, 7, 'asgdfghjk']

// let copy = arr.slice() //! arrayi butun kopyalayir
// let copy = arr.slice(4) //! verilen idexden sona kimi kopyalayir
// let copy = arr.slice(4, 6) //! 4cu index daxil 6ci daxil olmadan kopyalayir

// console.log(copy);