"use strict";


function myFunction(main) {
  let objsave = {};
  let key;

  for (key in main) {
    objsave[key] = main[key];

  }

  return objsave;
}

const theNumbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  favorites: {
    bla: 16,
    kel: 9,
    zero: 0
  }
};


let testNums;
testNums.myFunction(theNumbers);

testNums.six = 16;
testNums.favorites.kel = 5;
console.log(theNumbers);
console.log(testNums);
