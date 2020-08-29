"use strict";
document.body.style.backgroundImage = `url(img/1.jpg)`;

const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circle = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),
  oneHeart = wrapper.querySelector('.heart'),
  body = document.getElementsByTagName('body');

// box.style.backgroundColor = 'blue';
// box.style.width = '418px';
box.style.cssText = 'background-color: orange; width: 418px;';

btns[0].style.borderRadius = '100%';
circle[0].style.backgroundColor = '#6633FF';

// for (let k = 0; k < hearts.length; k++) {
//   hearts[k].style.backgroundColor = '#3366ff';
// }

hearts.forEach(item => {
  item.style.backgroundColor = '#9966ff';
});



const div = document.createElement('div');
// const content = document.createTextNode('Go to Fuck');
div.classList.add('yellow');
div.style.cssText = 'background-color: yellow; width: 418px; height: 150px; /*margin: 10px*/;';

// document.body.append(div);
// document.querySelector('.wrapper').prepend(div);
// wrapper.prepend(div);
// wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[-1]);

// hearts[0].before(div);
// hearts[0].after(div);

// circle[1].remove();
// wrapper.removeChild(hearts[1]);


// hearts[1].replaceWith(circle[0]);
wrapper.replaceChild(circle[0], hearts[1]);

div.innerHTML = '<h1>Hello World</h1>';
// div.textContent = "<h1>Hello World</h1>";

// hearts[2].after(div);
div.insertAdjacentHTML('afterbegin', '<h2>Hello Georgis Friends</h2>');


// let num;

// function backGoundImages() {
//   do {
//     num = +prompt("If you want bakground have img please enter 1 ", 0);
//     if (isNaN(num)) {
//       continue;
//     }
//     else if (num != null && num != '') {
//       document.body.style.backgroundImage = `url(img/${num}.jpg)`;
//       break;
//     }
//     else {
//       continue;
//     }
//   } while (true);
// }

// backGoundImages();

// console.log(hearts);
// console.log(oneHeart);
