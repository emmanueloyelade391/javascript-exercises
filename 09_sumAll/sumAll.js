const sumAll = function(x, y) {
  let sum = 0;
  for (let i = x; i < y + 1; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
