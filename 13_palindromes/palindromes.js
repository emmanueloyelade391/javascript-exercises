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

palindromes("racecar!");

// Do not edit below this line
module.exports = palindromes;
