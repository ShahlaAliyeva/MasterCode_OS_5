//! Objects => 'this' keyword
//? JS is Functional and OOP programming language

// let userData = ['username', 'John', 'password', '1234', 'email', '']

//! key, value ==> key mutleq string, symbol || value her hansi tipde olar

// let age = 23
let userData = {
  userName: "John",
  age: 23,
  email: "John@gmail.com",
  password: "1234",
  hobbies: ["sport", "music", "reading"],
  adress: {
    country: "Azerbaijan",
    city: "Baku",
    postalcode: "AZ1004",
  },

  sayHello: function () {
    return this;
  },

  //   sayHello: () => {
  //     return this;
  //   },
};

// console.log(userData.hobbies, userData["email"]);

// //? addition to object
// userData["userSurname"] = "Filankesov";

// //? modify to object
// userData.age = 18;

// //? delete from object
// delete userData.hobbies;

// console.log(userData);

//? Difference between primitive and reference types
// let copyOfObject = { ...userData }; //! shallow copy

// userData.adress.country = "UK";
// userData.email = "sdtfghujklvguhbsij";

// console.log("User data: \n", userData);
// console.log("Copy data: \n", copyOfObject);

//? global scope this

// console.log(this);
// console.log(window);

// console.log(userData.sayHello());

//! Object methods

//? Object.keys() -> array of keys

// let keys = Object.keys(userData);
// console.log(keys);

// keys.forEach((key) => {
//   console.log(key);
// });

//? Object.values() -> array of values

// console.log(Object.values(userData))

//? Object.entries() -> array

// console.log(Object.entries(userData))

//? Object.assign() -> property elave edir

// let data = {
//   newDataName: "newDataName",
//   newDataAge: 28,
// };

// console.log(Object.assign(userData, { userSurname: "Filankes" }));
// console.log(Object.assign(userData, data));

//? Object.freeze() -> obyekti dondurur
//? Object.isFrozen() -> true, false qaytarir

// console.log(Object.isFrozen(userData));
// Object.freeze(userData);

// delete userData.userName;
// userData.age = 45;

// console.log(Object.assign(userData, { userSurname: "Filankes" }));
// console.log(Object.isFrozen(userData));
// console.log(userData);

//? Object.seal() -> add, delete icaze vermir || modify icaze verir

// Object.seal(userData);
// ! delete, add icaze yoxdur
// console.log(Object.assign(userData, { userSurname: "Filankes" }));
// console.log(delete userData.userName);

// * modify icaze var
// userData.password = 'changed password';
// console.log(userData);

//! [1,2,3, 'sdfghj', true] 1D array
//! 2D arrays

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(`[${i}][${j}]`, array[i][j]);
  }
  console.log("\n");
}
