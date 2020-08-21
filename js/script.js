"use strict";
//To String

// 1) method
console.log(typeof (String(undefined)));
console.log(typeof (String(30)));
///////////////////////////////////////////
console.log(" ");
// 2) method
console.log(typeof (Number + ''));
const numHref = 16;
console.log("https://instagram.com/story/" + numHref);
////////////////////////////////////////////////////////////////////////////////////////

console.log(" ");

//To Number 
// 1) method
console.log(typeof (Number('10')));

// 2) method
console.log(typeof (+"2"));

// 3) method 
console.log(parseInt("40px", 10));
////////////////////////////////////////////////////////////////////////////////////////////////

console.log(" ");

//To Boolean
// 0, '', null, undefined, NaN //is false

// 1) method
let numOne = 1,
  numTwo = 0;

if (numOne) {
  console.log(typeof (Boolean("Hello Baby")));
}
/////////////////////////////////////////////////
// 2) method
console.log(typeof (Boolean('1')));
// 3) method
console.log(typeof (Boolean(!!'1')));
