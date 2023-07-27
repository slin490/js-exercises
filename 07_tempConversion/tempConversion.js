const convertToCelsius = function(fahTemp) {
  celsius = (5/9) * (fahTemp - 32);
  celsius = Math.round(celsius * 10) / 10
  return celsius;
};

const convertToFahrenheit = function(celTemp) {
  fahrenheit = (9/5) * celTemp + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
