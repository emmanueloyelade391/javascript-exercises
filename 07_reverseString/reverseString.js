const reverseString = function(string) {
  const arr = string.split(" ");

  const reversedString = arr.map(function(item) {
    let reversedString = [];

    for (let i = 1; i < item.length + 1; i++) {
      reversedString += item.at(-(i));
    }

    return reversedString;
  });

  const result = reversedString.join(" ");

  return result;
}

console.log(reverseString("hello"));

// Do not edit below this line
module.exports = reverseString;

/*
let arr = string.split(" ");

  let result = arr.map(function(item) {
    let reversedString;
    for (let i = 1; i < item.length + 1; i++) {
      reversedString += item.at(-i);
    } 

    return reversedString;
    });
  
  const stringResult = result.join(" ");
  return stringResult;
  */