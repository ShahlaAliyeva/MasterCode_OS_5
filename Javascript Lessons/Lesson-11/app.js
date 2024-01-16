let button = document.querySelector("button"),
  nameInput = document.getElementById("name"),
  passwordInput = document.getElementById("passw"),
  paragraph = document.querySelector("p"),
  boxes = document.querySelectorAll(".container .box"),
  container = document.querySelector(".container"),
  html = document.querySelector("html");

// console.dir(container.children[2]);
// console.dir(container);

// console.dir(container.parentNode);
// console.dir(container.parentElement);

// console.dir(html.parentNode);
// console.dir(html.parentElement);
// console.dir(html.offsetParent);

//! Eventler

// button.addEventListener("click", function () {
//   console.log("buttona click edildi");
// });

// function buttonCaller(event) {
//   console.dir(event);
// }

// button.addEventListener("click", function (e) {
//   console.log(e.target);
//   console.log(button);
// });

// passwordInput.addEventListener("focus", function () {
//   console.dir(passwordInput.type);
//   passwordInput.type = "text";
//   console.dir(passwordInput.type);
// });

//! Text elde etme usullari
// * innerHTML
// * innerText
// * textContent

// paragraph.addEventListener("click", function (e) {
//   e.target.innerHTML = "<b>Deyisilen text</b>";
//   console.dir(e.target.textContent);
//   console.dir(e.target.innerHTML);
//   console.dir(e.target.innerText);
// });

//! inputlarda texti elde etmek

// nameInput.addEventListener("input", function () {
//   console.log("name input");
// });

// nameInput.addEventListener("keyup", function (e) {
//   paragraph.innerHTML = `<i>${e.target.value}</i> `;
//   console.dir(e.target.value);
// });

// nameInput.addEventListener("keypress", function (e) {
//   console.dir(e.target.value);
// });

//! js ile style deyisme

// container.children[1].addEventListener("click", function (e) {
//   e.target.style.backgroundColor = "rgb(164, 225, 211)";
//   e.target.innerHTML = `<b>Box2</b>`;
//   console.dir(e.target);
// });

//! parent && sibling

// console.dir(container.children[1].parentElement);

// container.children[1].addEventListener("click", function (e) {
//   e.target.parentElement.style.backgroundColor = "#ccc";
// });

// console.dir(container.children[1]);

//! mouseover && mouseout/mouseleave => css hover kimi isleyir

// container.children[1].addEventListener("mouseover", function (e) {
//   e.target.nextElementSibling.textContent = "Mouseover olundu";
//   e.target.previousElementSibling.style.color = "#fff";
//   e.target.previousElementSibling.style.backgroundColor = "#000";

//   console.log(e.target);
// });

//! ayriliqda css menimsetmek

// boxes.forEach((box) => {
//     console.log(box);
//   box.addEventListener("click", function (e) {
//     e.target.style.backgroundColor = "#000";
//     e.target.style.color = "#fff";
//     e.target.style.borderColor = "rgb(218, 151, 151)";
//   });
// });

//! classList anlayisi

// boxes.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     box.classList.toggle("activeBox");
//   });
// });
