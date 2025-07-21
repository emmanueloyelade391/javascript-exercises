const convertToCelsius = function(temp) {
  let convertedTemp = +((temp - 32) * (5/9)).toFixed(1);
  return convertedTemp;
};

const convertToFahrenheit = function(temp) {
  const convertedTemp = +(temp * (9/5) + 32).toFixed(1);
  return convertedTemp;
};

console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(-10)); 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
