const fibonacci = function(num) {
  let newNum = +num;

  if (newNum < 0) {
    return "OOPS";
  }
  
  if (newNum == 0) {
    return 0;
  }
  
  if (newNum == 1) {
    return 1;
  }

  let fibonacciNums = []
  fibonacciNums[0] = 0;
  fibonacciNums[1] = 1;

  for (let i = 2; i < newNum + 1; i++) {
    fibonacciNums[i] = fibonacciNums[i - 1] + fibonacciNums[i - 2];
  }

  return fibonacciNums[newNum];
};

console.log(fibonacci("2"));

// Do not edit below this line
module.exports = fibonacci;
