"use strict";
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

const linkForClub = document.querySelector('a'),
  newDiv = document.createElement('div');
newDiv.classList.add('test__touch__two');

document.body.insertAdjacentHTML('beforeend', `<h2>Hello</h2>`);


linkForClub.addEventListener('touchstart', (e) => {
  e.preventDefault();

  linkForClub.textContent = 'Go to F#$k 🤬';
});

linkForClub.addEventListener('touchmove', e => {
  e.preventDefault();

  console.log('move working...');
});
linkForClub.addEventListener('touchleave', e => {
  e.preventDefault();

  console.log('leave working...');
});