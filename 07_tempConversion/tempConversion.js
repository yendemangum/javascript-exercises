const convertToCelsius = function(num) {
let a = (num - 32) * 5/9
return Math.round(a*10)/10
};

const convertToFahrenheit = function(num) {
  let a = (num * 9/5) + 32
return Math.round(a*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
