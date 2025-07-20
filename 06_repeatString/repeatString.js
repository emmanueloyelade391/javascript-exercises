const repeatString = function(string, num) {
  let repeatedString = "";
  
  for (let i = 0; i < num; i++) {
    repeatedString += string;
  }

  return repeatedString; 
};

console.log(repeatString("hi", 1));

// Do not edit below this line
module.exports = repeatString;
