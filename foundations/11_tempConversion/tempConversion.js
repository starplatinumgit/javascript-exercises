const convertToCelsius = function(f) {
  return roundTo((f-32)/1.8);

};

const convertToFahrenheit = function(c) {
  return roundTo((c * (9/5)) + 32);
};

const roundTo = function(num) {
  return (Math.round(num * 10) / 10);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
