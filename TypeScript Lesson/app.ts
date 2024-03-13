// ! Basic types

// let a: number = 3;
// let b: number = 5;

// console.log(a / "23");
// console.log(a+b);

// let studentsarray = ["student1", "student2", "student3", true, false, 4]; //js-de yazilish
// let studentsarray: string[] = ["student1", "student2", "student3"]; //ts-de yazilish 1.
// let studentsarray: Array<string> = ["student1", "student2", "student3"]; //ts-de yazilish 2.

// let arr: [number, number, string, boolean] = [1, 3, "hgdsj", true]; // tuple

// studentsarray.forEach(element => console.log(element))

// ! Objects

// enum User {
//   userName = "Filankes",
//   userSurname = "Filankesov",
//   userEmail = "Filankesov@gmail.com",
// }

// console.log(User.userEmail);

// ! Type assertion
// let userName: string;

// userName = 'Filankes'
// console.log(userName.split(''));

// let userName;

// userName = 'Filankes'
// let arr = (<string>userName).split('')
// let arr = (userName as string).split('')

// console.log(arr);

// ! Functions

// function avarage(a: number, b: number, c?: number): number {
//   if (c) return a + b + c;
//   return a + b;
// }

// avarage(4, 5);
// avarage(5, 6, 7);

// ! Rest operator [] yaradir
// function sum(...nums: number[]): number {
//   let total = 0;
//   nums.forEach((num) => (total += num));

//   return total;
// }

// console.log(sum(3, 4, 5));
// console.log(sum(3, 4, 5, 6, 7, 8, 0));

//! interfaces
// interface User {
//   userName: string;
//   age: number;
//   country: string;
//   isStudent: boolean;
// }

// function createStudent(userName, age, country, isStudent): User {
//   return userName;
// }

// const custumer = (user: User) => {
//   console.log(user);
// };

// custumer({ age: 23, country: "shjs", isStudent: false, userName: "Student" });

// ! Typscript on HTML Elements

let input = document.querySelector("input") as HTMLInputElement;
let form = document.querySelector("form") as HTMLFormElement;
let list = document.querySelector("ul") as HTMLUListElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createElement();
});

function createElement() {
  if (input.value.trim()) {
    console.log("gshjk");
    let li = document.createElement("li") as HTMLLIElement;
    let span = document.createElement("span") as HTMLSpanElement;
    let button = document.createElement("button") as HTMLButtonElement;

    span.textContent = input.value;
    button.textContent = "delete";
    li.append(span, button);
    list.append(li);

    button.addEventListener("click", function () {
      console.log(button.parentElement?.remove());
    });
  }

  input.value = "";
}
