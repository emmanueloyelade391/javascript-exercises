const removeFromArray = function(array, ...items) {
  for (let i = 0; i < items.length; i++){
    if (!array.includes(items[i])) {
    return `Error. ${items[i]} does not exist.`
    }
  }
 
  for (let i = 0; i < items.length; i++) {
    let itemIndex = array.indexOf(items[i]);

    array.splice(itemIndex, 1);
  }
  

  return array;
};

console.log(removeFromArray([1, 2, 2, 3], 2)); //Continue working on this exercise tomorrow

// Do not edit below this line
module.exports = removeFromArray;
