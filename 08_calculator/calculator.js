const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function([...args]) {
	let total = 0;
  args.forEach(e => total += e);
  return total;
};

const multiply = function([...args]) {
  let total = 1;
  args.forEach(e => total *= e);
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(number) {
	if (number === 0) return 1;
  let result = 1;
  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
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
