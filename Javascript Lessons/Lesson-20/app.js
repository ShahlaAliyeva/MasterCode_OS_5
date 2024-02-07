// ! Local storage

// console.log("Local: ", localStorage);

localStorage.setItem("lesson", "local stroage example");
localStorage.setItem("name", "filankes");
localStorage.setItem("age", "21");

// console.log(localStorage.getItem("age"));

// localStorage.removeItem("age");

// console.log(localStorage.getItem("age"));

// localStorage.clear();

let students = ["Shefa", "Xumar"];

// localStorage.setItem("students", students);
localStorage.setItem("students", JSON.stringify(students));

let dataFromLocalStorage = JSON.parse(localStorage.getItem("students"));

// console.log(dataFromLocalStorage);
// console.log(typeof dataFromLocalStorage);

let obj = {
  name: "dxfcv",
  email: "example@example.com",
};

localStorage.setItem("numune", JSON.stringify(obj));
// console.log(JSON.parse(localStorage.getItem("numune")));

// ! session storage

// console.log("Session: ", sessionStorage);

// sessionStorage.setItem("session_name", "example");
// console.log(sessionStorage.getItem("session_name"));

// ! Promise -> callback hell qarsisini almaq ucun, ES6 ile gelib
//* States: pending, resolve(fullfilled), reject

// let randomNumber = new Promise(function (resolve, reject) {
//   let rendomNum = Math.floor(Math.random() * 10);

//   setTimeout(() => {
//     if (rendomNum > 5) {
//       resolve(rendomNum);
//     } else {
//       reject(rendomNum);
//     }
//   }, 4000);
// });

// randomNumber
//   .then(function (num) {
//     console.log("resolved: ", num);
//   })
//   .catch(function (num) {
//     console.log("rejected: ", num);
//   })
//   .finally(function () {
//     console.log("finally");
//   });

// ! Fetch(url, options)
// * url -> API url, backendden gelen bir link olacaq
// * options -> method, headers, body
// ! CRUD -> Create ,Read, Update , Delete

const container = document.querySelector(".container");
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    users.forEach((user) => {
      container.innerHTML += `
        <div class="card">
            <p>${user.name}</p>
            <p>${user.username}</p>
            <p>${user.email}</p>
        </div>
      `;
    });
  });
