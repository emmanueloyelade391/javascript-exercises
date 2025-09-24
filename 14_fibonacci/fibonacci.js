const fibonacci = function(num) {
  let fibonacciNums = []
  fibonacciNums[0] = 0;
  fibonacciNums[1] = 1;

  for (let i = 2; i < num + 1; i++) {
    fibonacciNums[i] = fibonacciNums[i - 1] + fibonacciNums[i - 2];
  }

  return fibonacciNums[num];
};

console.log(fibonacci(15));

// Do not edit below this line
module.exports = fibonacci;
