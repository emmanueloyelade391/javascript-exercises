const removeFromArray = function(array, ...items) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!(items.includes(array[i]))) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)); //Continue working on this exercise tomorrow

// Do not edit below this line
module.exports = removeFromArray;
