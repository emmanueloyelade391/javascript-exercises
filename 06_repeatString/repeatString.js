const repeatString = function(string, num) {
  let repeatedString = "";

  if (num < 0) {
    return "ERROR";
  }
  
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }

  return repeatedString; 
};

console.log(repeatString("", 10));

// Do not edit below this line
module.exports = repeatString;
