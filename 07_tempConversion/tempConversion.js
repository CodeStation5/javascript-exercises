const convertToCelsius = function(farTemp) {
  let C = (farTemp - 32) * .5556
  return Math.round(C * 10) /10;
};

const convertToFahrenheit = function(celTemp) {
  let F = (celTemp * 1.8) + 32;
  return Math.round(F * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
