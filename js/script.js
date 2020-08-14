"use strict";

const numbers = [2, 8, 9, 7, 1, 10, 5, 3, 4, 6];

console.log(numbers.sort((a, b) => {
  return a - b;
}));


numbers.push(9);
numbers.push(10);

numbers.forEach(function (item, n, values) {
  console.log(`${n}: ${item} have values ${values}`);
});


numbers.pop();
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.pop();
for (let item of numbers) {
  console.log(item);
}


const questionOne = prompt("Please enter your name and your friends name", "");
const arr = questionOne.split(", ");
console.log(arr.join('; '));

