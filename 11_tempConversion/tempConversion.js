const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32) * (5/9);
  return convertedTemp;
};

const convertToFahrenheit = function() {
};

console.log(convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
