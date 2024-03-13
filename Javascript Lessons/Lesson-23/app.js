// ! Node Package Manager -> NPM
// JS Modules
// ? 1. Built-in JS Modules
// ? 2. Local JS Modules
// ? 3. Community JS Modules

// ! Built-in JS Modules

// let a = 2.345678
// console.log(Math.ceil(a));

// ! Local JS Modules
// ? 1. CommonJS

// ! CommonJS import
// const fs = require("fs");

// fs.writeFile("./readme.md", "# Example from Common JS", "utf-8", (err) => {
//   console.log(err);
// });

// fs.readFile("./index.html", "utf-8", (err, data) => {
//   console.log(data);
// });

// const { userAge, userEmail, userName } = require("./user");
// console.log(userAge);

// ? 2. ES6
// ! import from export default
// import * as data from "./user.mjs";
// console.log(data);

// ! import from normal export

import { userEmail as email, userAge, userName as user } from "./user.js";
console.log(email);
console.log(userAge);
console.log(user);

// ! Community Module

// const { hiMom } = require("hi-mom");

// console.log(hiMom("Salam", "az")); // Hi, mom!
