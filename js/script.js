"use strict";
let textOne = "Hello World",
  textTwo = [1, 2, 3, 4];


function one() {
  setTimeout(function () {
    console.log(1);
  }, 500);
  console.log(textOne.slice(0, 5));
  console.log(textOne.indexOf('W'));
}

function two() {
  console.log(2);
}

one();
two();


