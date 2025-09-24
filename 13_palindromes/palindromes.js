const palindromes = function (string) {
   let left = string[0];
   let right = string.length - 1;

   while (left < right) {
      if (left != right) {
         return false;
      }

      left++;
      right--;
   }

   return true;
};

console.log(palindromes("A car, a man, a maraca."));

// Do not edit below this line
module.exports = palindromes;
