"use strict";
let a = 5,
  b = a;

b = b + 10;
// console.log(a);
// console.log(b);
///////////////////////////////////////////////////////////////////
const obj = {
  a: 5,
  b: 1,
  c: {
    x: 10,
    y: 15,
  }
};
let copyOne = obj;
copyOne.b = 10;

// console.log(copyOne);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  for (let key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

copyOne = copy(obj);
copyOne.a = 2;
copyOne.c.x = 16;

// console.log(obj);
// console.log(copyOne);

const newNumbers = {
  d: 2,
  i: 9,
};

let allObj = Object.assign({}, copyOne, newNumbers);//method №1
// Object.assign(allObj, newNumbers, copyOne);//method №2
allObj.a = 20;
// console.log(copyOne);
// console.log(allObj);
////////////////////////////////////////////////////////////////////////
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();//method №1
// const newArray = {...oldArray};//method №2
newArray[3] = 'd';
// console.log(oldArray);
// console.log(newArray);
///////////////////////////////////////////////////////

const socialNetworks = ['facebook', 'telegram', 'ok', 'vk', 'whatsapp'],
  video = ['youtube', 'uzdigitaltv', 'vimeo', 'rutube'],
  internet = [...socialNetworks, ...video, 'deepweb', 'darkweb'];

// console.log(internet);
//////////////////////////////////////////////////////////////////////////
function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

// const nums = [1, 2, 3];
// log(...nums);
///////////////////////////////////////////////////////////////////////////
const testObj = {
  one: 'one',
  two: 'two',
};

const q = { ...testObj };

// console.log(q);
