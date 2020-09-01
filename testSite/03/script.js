"use strict";
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);
console.log(document.body.lastElementChild);


console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSiblingt);
console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.body.firstChild);

for (let nodes of document.body.childNodes) {
  if (nodes.nodeName == "#text") {
    continue;
  }
  console.log(nodes);
}


const tests = document.querySelectorAll('[data-test="test"]');

for (let test of tests) {
  console.log(test);
}

tests.forEach(function (test) {
  console.log(test);
});