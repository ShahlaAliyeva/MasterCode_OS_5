let box = document.querySelector(".box");
let input = document.querySelector("input");
let paragraph = document.querySelector("p");
let button = document.querySelector("button");
let anchor = document.querySelector(".anchor");
let form = document.querySelector("form");

// !mousedown and mouseup events --> ikisi birlikde click eventi kimidir

// box.addEventListener("mousedown", function (e) {
//   e.target.style.backgroundColor = "red";
//   console.log(e.target);
// });

// box.addEventListener("mouseup", function (e) {
//   e.target.style.backgroundColor = "#416400";
// });

// box.addEventListener("click", function (e) {
//   if (e.target.style.backgroundColor === "red") {
//     e.target.style.backgroundColor = "#416400";
//   } else {
//     e.target.style.backgroundColor = "red";
//   }
// });

// ! mouseover && mouseout

// box.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "red";
// });

// box.addEventListener("mouseout", function (e) {
//   e.target.style.backgroundColor = "#416400";
// });

//! double click

// box.addEventListener("dblclick", function (e) {
//   e.target.style.display = "none";
//   e.target.style.backgroundColor = "red";
// });

//! select event
// * inputlarda islenir

// paragraph.addEventListener("select", function (e) {
//   console.log(e.target);
// });

// let selectedInputText = "";
// input.addEventListener("select", function (e) {
//   selectedInputText = e.target.value;
// });

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(selectedInputText);
// });

//! copy

// input.addEventListener("copy", function (e) {
//   console.log("Copied text: ", e.target.value);
// });

//! paste

// input.addEventListener("paste", function () {
//   console.log("Paste text");
// });

//! preventDefault funksiyasi

//? anchor tag

// anchor.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("anchor tag is loading...");
//   window.location.href = "./about.html";
//   console.log(window.location.href);
// });

//? form submit

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   paragraph.textContent = input.value;
//   input.value = "";
//   console.log(paragraph.textContent);
// });

//! keyup && keydown

// input.addEventListener("keyup", function (e) {
//   //   if (e.key === "Shift") {
//   //     console.log(e.key);
//   //   }

//   console.log(e.key);
// });

// input.addEventListener("keydown", function (e) {
//   //   if (e.key === "Shift") {
//   //     console.log(e.key);
//   //   }

//   console.log(e.key);
// });

//! screenX, screenY --> comp window || clientX, clientY && pageX, pageY && layerX, layerY --> x, y e gore

// button.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.screenX);
//   console.log(e.clientX);
// });
