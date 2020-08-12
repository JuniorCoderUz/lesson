const options = {
  name: 'computer',
  width: 1600,
  height: 900,
  colors: {
    border: 'black',
    background: 'red'
  }
};

console.log(options);

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Properties ${i} have value ${options[key] [i]}`);
    }
  }
  else {
    console.log(`properties ${key} have value ${options[key]}`);
  }
}

