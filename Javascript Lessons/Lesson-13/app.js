const button = document.querySelector("button"),
  input = document.querySelector("input"),
  ul = document.querySelector(".list__items"),
  paragraph = document.querySelector("p");

// ! createElement()
// let p = document.createElement("p");
// p.textContent = "Text in JS";

// document.body.appendChild(p);

// console.log(p);

// let idCount = 0;
// button.addEventListener("click", function (e) {
//   if (input) {
//     const listItem = document.createElement("li");
//     idCount++;
//     listItem.className = "list__item";
//     listItem.id = `${idCount}`;
//     listItem.style.color = "chocolate";
//     // listItem.classList.add("list__item");
//     listItem.textContent = `${idCount}) ` + input.value;
//     console.dir(listItem);
//     // document.body.appendChild(listItem);
//     list.appendChild(listItem);
//     input.value = "";
//   }
// });

//! append, appendChild, prepend

// * appendChild vs. append
// let count = 0;

// button.addEventListener("click", function (e) {
//   count++;
//   const li = document.createElement("li");
//   li.textContent = `List item ${count}`;

//   //   ul.append(`List item ${count}`);
//   ul.appendChild(li);
// });

// * prepend

// let count = 0;

// button.addEventListener("click", function (e) {
//   count++;
//   const li = document.createElement("li");
//   li.textContent = `List item ${count}`;

//   ul.prepend(li)
// });

// ! DocumentFragment

// let languages = ["JS", "TypeScript", "Elm", "Dart", "Scala"];
// let fragment = new DocumentFragment();

// languages.forEach((language) => {
//   let li = document.createElement("li");
//   li.innerHTML = language;
//   fragment.appendChild(li);
// });

// ul.appendChild(fragment);

//! after()

// const newParagraph = document.createElement("p");
// newParagraph.innerHTML = "JS text";

// paragraph.after(newParagraph);

//! insertAdjacentHTML()

/*
 * 'beforebegin': before the element
 * 'afterbegin': before its first child of the element. (prepend)
 * 'beforeend': after the last child of the element (append)
 * 'afterend': after the element
 */

// let count = 0;
// button.addEventListener("click", function () {
//   count++;

//   ul.insertAdjacentHTML("beforebegin", `<li>List item ${count}</li>`);
// ul.insertAdjacentHTML("afterbegin", `<li>List item ${count}</li>`);
//   ul.insertAdjacentHTML("beforeend", `<li>List item ${count}</li>`);
//   ul.insertAdjacentHTML("afterend", `<li>List item ${count}</li>`);
//   ul.insertAdjacentHTML("beforeend", li);
// });

//! cloneNode
// let menu = document.querySelector("#menu");
// let clonedMenu = menu.cloneNode(true);
// clonedMenu.id = "menu-mobile";
// document.body.appendChild(clonedMenu);

//! removeChild() -> elementin daxilindeki silinen elementi ona otururuk, remove() -> elementin ozune verilir

let count = 0;
button.addEventListener("click", function () {
  count++;

  const li = document.createElement("li");
  li.id = `${count}`;
  li.textContent = `List item ${count}`;

  li.addEventListener("click", function (e) {
    console.log(e.target);
    // e.target.remove();
    ul.removeChild(li);
  });

  ul.appendChild(li);
});
