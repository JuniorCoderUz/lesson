"use strict";
const arr = ["one", "two", "three", "four"];

const props = ["info", "about", "hello", "design"];
const arr2 = arr.map((i, index, array) => {
  i += `-${props[index]}`;
  return i;
});

// for (let a of arr) {
//   arr2.push(a += `-${props[arr.findIndex((i) => i === a )]}`)
// }
console.log(arr2);
console.log(arr);
