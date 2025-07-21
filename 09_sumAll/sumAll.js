const sumAll = function(x, y) {
  if (x < 0 || y < 0) {
    return "ERROR";
  }

  let sum = 0;

  if (x > y) {
    for (let i = y; i < x + 1; i++) {
      sum += i;
    }
  }

  for (let i = x; i < y + 1; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(10, -4));

// Do not edit below this line
module.exports = sumAll;
