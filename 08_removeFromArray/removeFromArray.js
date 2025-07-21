const removeFromArray = function(array, ...items) {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!(items.includes(array[i]))) {
      resultArray.push(array[i]);
    }
  }

  return resultArray;
};

console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)); //Continue working on this exercise tomorrow

// Do not edit below this line
module.exports = removeFromArray;
