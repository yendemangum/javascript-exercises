const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((total, currentItem) => +total+ +currentItem, 0)
};

const multiply = function(args) {
  return args.reduce((a, b) => 
     {
      return a * b;
    }, 1)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	let product = 1
  if (num == 0) {return product} 
  for (let i = 1; i <= num; i++){
    product *= i
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
