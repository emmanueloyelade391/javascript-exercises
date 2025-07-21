const sumAll = function(x, y) {
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

console.log(sumAll(2, 4000));

// Do not edit below this line
module.exports = sumAll;
