"use strict";
//Get Id element in html document
let box = document.getElementById('box');
console.log(box);
/////////////////////////////////////////////////////////////
//Get class elements in html document
// 1) method getElementsByClassName
let circle = document.getElementsByClassName('circle');
console.log(circle);
/////////////////////////////////////////////////////////////
//Get class elements in html document
// 2) method querySelectorAll
let hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(items => {
  console.log(items);
});
/////////////////////////////////////////////////////////////
//Get class element in html document 
//3) method querySelector 
let oneHeart = document.querySelector('.heart');
console.log(oneHeart);
/////////////////////////////////////////////////////////////
//Get jtml tag in html document  
let tag = document.getElementsByTagName('button');
console.log(tag);