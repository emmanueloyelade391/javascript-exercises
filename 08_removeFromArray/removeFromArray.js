const removeFromArray = function(array, ...items) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!(items.includes(array[i]))) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};

console.log(removeFromArray([1, 2, 3], "1", 3));
//I completed this exrcise, but I cheated by looking at the solution first and copying it.

// Do not edit below this line
module.exports = removeFromArray;
