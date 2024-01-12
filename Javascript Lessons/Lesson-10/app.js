// ! Aynchronous javascript -> setTimeout, setInterval
// ! 1000 ms (millisaniye) = 1 saniye

// for (let i = 0; i < 10e7; i++) {
//   console.log();
// }

// console.log("after loop");

//? setTimeout()

// console.log("setTimeout`dan evvel");

// let timeOut = setTimeout(function () {
//   console.log("settimeout ishe dushdu");
// }, 4000);

// console.log("setTimeout`dan sonra");

//? setInterval()

// console.log('setInterval before');
// let interval = 0;
// let time = setInterval(() => {
//   interval++;
//   document.write("setInterval`in ichi" + "<br/>");

//   if (interval === 5) {
//     clearInterval(time);
//   }
// }, 2000);

// console.log('setinterval after');

//! Error handling -> try, catch, finally

// let user = 'szdxcf'
// let isLoading = true;

// try {
//   console.log(user);
// } catch (error) {
//   error.message = "Qeyd etdiyiniz deyer teyin edilmeyib";
//   error.name = "CustomError";
//   document.write(error.message);
//   console.log(error);
//   //   throw new Error("CustomError bizim yaratdigimiz error");
// } finally {
//   isLoading = false;
// }

//! DOM -> Document Object Model

// console.log(document.body);

//? id` e gore elementi elde etmek
// let firstParagraph = document.getElementById("first_par");
// console.dir(firstParagraph);

//? class name ile elementi elde etmek
// let paragraphs = document.getElementsByClassName('paragraph')
// console.log(paragraphs);

//? tag name ile elementi elde etmek
// let paragraphs = document.getElementsByTagName('p')
// console.log(paragraphs);

//? name - e gore elementi elde etmek => nodeList qaytarir
// let checkBoxes = document.getElementsByName("hobbies");
// console.log(checkBoxes);

//* QuerySelector
// let paragraph = document.querySelectorAll('p')
// let paragraph = document.querySelector(".container .paragraph");
// let firstPar = document.querySelector("#first_par");

//* QuerySelector ile elemente sorgu gondermek
// let container = document.querySelector(".container");
// let par = container.querySelector(".paragraph");
// console.log(par);
