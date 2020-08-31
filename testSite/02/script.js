'use strict';


const btns = document.querySelectorAll('button'),
  overlay = document.querySelector('.overlay'),
  path = document.querySelector('.path');
let q = 0;


// btn.onclick = () => {
//   alert('Click');
// };

// btn.onclick = () => {
//   alert('Second Click');
// };


const actionsElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);
  e.target.style.backgroundColor = 'red';
  // q++;
  // e.target.remove();
  // if (q == 1) {
  // 	btns.removeEventListener('click', actionsElement);
  // }
};

const newActions = (event) => {
  event.currentTarget.style.backgroundColor = 'blue';
};
// path.textContent = 'Хуй тебе 🤬';
const joke = (e) => {
  e.preventDefault();
  e.target.textContent = 'Хуй тебе 🤬';
};

btns.forEach((btnsAll, btnsIndex, btns) => {
  btnsAll.addEventListener('mouseenter', actionsElement);
  console.log(btnsAll);
}
);
overlay.addEventListener('mouseenter', newActions);
path.addEventListener('click', joke);