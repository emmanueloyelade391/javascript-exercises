const add = function(x, y) {
	return x + y;
};

console.log(add(2, 6));

const subtract = function(x, y) {
  return x - y;
};

console.log(subtract(-8, 7));

const sum = function(array) {
	return array.reduce((total, item) => total + item, 0);
};

const arr = [1, 3, 5, 7, 9];

console.log(sum(arr));

const multiply = function(array) {
  return array.reduce((total, item) => total * item, 1);
};

const arrProduct = [2, 4, 6, 8, 10, 12, 14];

console.log(multiply(arrProduct));

const power = function(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }

  return result;
};

console.log(power(3, 10));

const factorial = function(x) {
	let result = 1;
  if (x === 0) {
    return result;
  }
  for (let i = x; i > 0; i--) {
    if (x === 0) {
      result *= 1;
    }
    result *= i;
  }

  return result;
};

console.log(factorial(5));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
