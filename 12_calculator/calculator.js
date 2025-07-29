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

arr = [1, 3, 5, 7, 9];

console.log(sum(arr));

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
