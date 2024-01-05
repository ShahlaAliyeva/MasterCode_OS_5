/* 1.
 * Verilmis String`i tersine ceviren bir funksiya yazin
 * Funksiya 1 eded string qebul etmeli ve geriye string qaytarmalidir
 */

function reverseString(someString) {
  let reversedString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    const char = someString[i];
    reversedString += char;
  }

  return reversedString;
}
/* 2.1
 *  1 funksiya yaradirsiniz bu funksiya string qebul edir ve geriye string qaytarmalidir, bu string polindromdursa true, deyilse false qaytarsin
 */

// function isPolindrome(somestring) {
//   let str = reverseString(somestring);
//   if (str === somestring) {
//     return true;
//   }
//   return false;
// }

function isPolindrome(somestring) {
  let right = somestring.length - 1;
  let left = 0;

  while (left < right) {
    if (somestring[left] === somestring[right]) {
      return true;
    }
    left++;
    right--;
  }

  return false;
}

/* 2.2
 * Funksiya metni string qebul etmeli ve geriye herfleri ve onlarin nece defe istifade olundugunu qaytarmalidir
 */

function getCharFrequency(someString) {
  let frequency = {};

  for (let i = 0; i < someString.length; i++) {
    let char = someString[i];

    if (char in frequency) {
      // ve ya frequency[char]
      frequency[char] += 1;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

// let frequency = {
//   a: 1,
//   p: 2
// };

// frequency['l'] = 3
// frequency.a = 10

// console.log(frequency, frequency.a, frequency['p'], frequency.l);

/* 3.
 * Funksiya 1 eded string qebul etmeli ve geriye string daxilinde en cox tekrarlanan herfi qaytarmalidir
 */

function mostFrequencyChar(someString) {
  const frequency = getCharFrequency(someString); //obyekti menimsedirik
  //   console.log(frequency);

  let maxFrequency = 0;
  let mostFrequentCharacter;

  for (let i = 0; i < someString.length; i++) {
    //apple
    let char = someString[i]; //a, p, l, e
    let currentFrequency = frequency[char]; //1, 2, 1, 1

    if (maxFrequency <= currentFrequency) {
      // 0 <= 1, 1<=2, 2 <= 1 false
      maxFrequency = currentFrequency; //max -> 1, max -> 2
      mostFrequentCharacter = char; // a, p
    }
    // console.log(char);
  }
  return mostFrequentCharacter;
}

/* 4.
 * Funksiya 1 eded string qebul etmeli ve verilen cumlede nece soz oldugunu geri qaytarmalidir
 * qaytarilan deyer Number tipinde olmalidir
 */

function countWords(text) {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char === " ") {
      count += 1;
    }
  }
  return count + 1;
}

// console.log(
//   countWords("Funksiya 1 eded string qebul etmeli ve verilen cumlede nece soz")
// );

/* 7.
 * addStrings adlı bir funksiya yazın. Funksiya iki ədəd stringi parametr kimi qəbul etməli, və onların cəmini string olaraq geri
 * qaytarmalıdır. Sizə verilən stringlər həmişə hansısa bir ədədi təmsil edəcək.
 */

function addString(num1, num2) {
  return +num1 + +num2;
}

//? 1 funksiya yazirsiniz number tipi parametr qebul edir, stringe cevirme olmadan verilmis reqemin sonuna 1 elave etmelisiniz
//  55 ==> 551
//  12345 ==> 123451

// function addOne(num) {
//   return num * 10 + 1;
// }

// ! Metod istifadəsi ilə
/* 8.
 * "dunen bazardan iki mata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi" cümləsində polindrom sözləri və onların yerləşdiyi index`ləri təyin edib, obyekt daxilində nizamlı şəkildə çıxışa verin
 */

// let str =
//   "dunen bazardan iki mata utu aldim. hemen utunu ana chox beyendi. kicik hediyye olmasina baxmayaraq bu hediyye cox ses saldi";

function findIdexes(str) {
  let array = str.split(" ");
  let obj = {};
  array.forEach((word) => {
    if (isPolindromeWord(word.toLowerCase())) {
      obj[word] = str.indexOf(word);
    }
  });
  return obj;
}

function isPolindromeWord(str) {
  let reversedStr = str.split("").reverse().join("");

  if (reversedStr === str) {
    return true;
  }
  return false;
}

/* 9.
 * "sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM" verilmiş nümunədə rəqəmlərin cəmini tapan funksiya tərtib edin
 */
let str =
  "sdfg546cv5fgs9szdf3sSzP4dsf7sdf032ghj5dfgh8Qrrghfj1fdQEdrh5902fgh89YM";

function sumNumbers(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
      //   console.log(str.charAt(i));
      sum += Number(str.charAt(i));
    }
  }
  return sum;
}

// ! Home tasks 

// !String (metodlardan istifadeye icaze var)
//? 5.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen cumledeki sozlerden (reqemler arraya elave olunmamalidir) ibaret array qaytarmalidir
 */

//? 6.
/*
 * Funksiya 1 eded string qebul etmeli ve verilen metnde en cox istifade olunan sozu qaytarmalidir
 */

//! Array basic (metod istifadəsi olmadan)
/* 1.
 * verilmiş ixtiyari n ədədli massivdə max elementi təyin edən funksiya yazın
 */

/* 2.
 * verilmiş ixtiyari n ədədli massivdə min elementi təyin edən funksiya yazın
 */

/* 4.
 * verilmiş ixtiyari n ədədli massivi maksimumdan minimuma doğru sıralayan funksiya yazın
 */

/* 5.
 * verilmiş ixtiyari n ədədli massivi minimumdan maksimuma doğru sıralayan funksiya yazın
 */