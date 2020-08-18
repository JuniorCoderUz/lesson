"use strict";
const str = "Some";
let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);
////////////////////////////////////////////////////////////////////////////
const soldier = {
  health: 400,
  armor: 100,
  myprint: () => console.log("Hello World"),
};
// soldier.myprint();



// const ronald = {
//   health: 150,
// };
// ronald.__proto__ = soldier; //old method for proto №1
// console.log(ronald);
// console.log(ronald.myprint);
///////////////////////////////////////////////////////////////////////////////

const benjamin = {
  health: 50,
  profession: ['hacker', 'programmer'],
};
// Object.setPrototypeOf(benjamin, soldier); //method for proto №2
// console.log(benjamin.armor);


// const ben = Object.create(soldier); //new method for proto №3
// ben.myprint();