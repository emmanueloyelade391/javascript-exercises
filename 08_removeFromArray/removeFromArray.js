const removeFromArray = function(array, ...items) {
  console.log(items);

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

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
