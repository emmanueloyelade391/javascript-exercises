const palindromes = function (string) {
   let left = string[0];
   let right = string.length - 1;

   while (left < right) {
      if (string[left] != string[right]) {
         return false;
      }

      left++;
      right--;
   }

   return true;
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));

// Do not edit below this line
module.exports = palindromes;
