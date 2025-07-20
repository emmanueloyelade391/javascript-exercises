const reverseString = function(string) {
  const arr = string.split(" ");

  console.log(arr);

  let reversedArray = [];

  for (let i = 1; i < arr.length + 1; i++) {
    reversedArray.push(arr.at(-(i)));
  }

  const reversedString = reversedArray.map(function(item) {
    let reversedString = [];

    for (let i = 1; i < item.length + 1; i++) {
      reversedString += item.at(-(i));
    }

    return reversedString;
  });

  const result = reversedString.join(" ");

  return result;
}

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;