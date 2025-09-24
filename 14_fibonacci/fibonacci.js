const fibonacci = function(num) {
  if (num < 0) {
    return "OOPS";
  }
  
  if (num == 0) {
    return 0;
  }
  
  if (num == 1) {
    return 1;
  }

  let fibonacciNums = []
  fibonacciNums[0] = 0;
  fibonacciNums[1] = 1;

  for (let i = 2; i < num + 1; i++) {
    fibonacciNums[i] = fibonacciNums[i - 1] + fibonacciNums[i - 2];
  }

  return fibonacciNums[num];
};

console.log(fibonacci(-25));

// Do not edit below this line
module.exports = fibonacci;
