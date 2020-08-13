"use strict";
const informations = {
  name: 'bugatti',
  motor: '1.6',
  maxSpeed: 465,
  colors: {
    body: 'black',
    border: 'red'
  },
  price: '150.000.000$',
  print: function (carName) {
    console.log(`${carName}`);
  }
};


// console.log(Object.keys(informations).length);


for (let information in informations) {
  if (typeof (informations[information]) === 'object') {
    for (let key in informations[information]) {
      console.log(`Propreties ${key} have values ${informations[information][key]}`);
    }
  }
  else {
    console.log(`Propreties ${information} have values ${informations[information]}`);
  }
}

informations.print('audi');