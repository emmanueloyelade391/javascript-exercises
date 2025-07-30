const palindromes = function (string) {
  let front = string[0];
  let end = string.at(-1);
  for (let i = 0; i < string.length; i++) {
    if (front !== end) {
      return false;
    }
    front = string[i];
    console.log(front);
    end = string.at(-(i + 1));
    console.log(end);
  }
  return true; 
};

console.log(palindromes("racecar"));

// Do not edit below this line
module.exports = palindromes;
