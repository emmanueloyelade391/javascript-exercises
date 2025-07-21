const sumAll = function(x, y) {
  if (x < 0 || y < 0) {
    return "ERROR";
  } else if ((x !== Math.floor(x) || x !== Math.ceil(x)) || (y !== Math.floor(y) || y !== Math.ceil(y))) {
    return "ERROR";
  } else if (typeof(x) !== "number" || typeof(y) !== "number") {
    return "ERROR";
  }

  console.log(typeof x);
  console.log(typeof y);

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

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
