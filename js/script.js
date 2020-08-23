"use strict";
// let sharp = "#";
// let one = "#";
// for (let i = 0; i < 7; i++) {
//   console.log(sharp);
//   sharp = sharp+one;
// }

for (let a = 1; a < 100; a++) {
  if (a % 2 == 0) {
    console.log(a);
  } else if (a % 2 == 1) {
    console.log("Bizz");
  }
  else {
    console.log("Fizz");
  }
}