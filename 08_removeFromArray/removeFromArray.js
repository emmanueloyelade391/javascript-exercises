const removeFromArray = function(array, item) {
  if (!array.includes(item)) {
    return `Error. ${item} does not exist.`
  }

  const itemIndex = array.indexOf(item);

  array.splice(itemIndex, 1);

  return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
