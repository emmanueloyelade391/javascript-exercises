const palindromes = function (string) {
   let newString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").toLowerCase().replaceAll(" ", "");

   let left = 0;
   let right = newString.length - 1;

   while (left < right) {
      if (newString[left] !== newString[right]) {
         return false;
      }

      left++;
      right--;
   }

   return true;
};

console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
