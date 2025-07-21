const convertToCelsius = function(temp) {
  let convertedTemp = +((temp - 32) * (5/9)).toFixed(1);
  return convertedTemp;
};

const convertToFahrenheit = function() {
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
