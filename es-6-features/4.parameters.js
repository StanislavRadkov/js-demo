// Default Parameter Values
var defaultParameterValues = (a = 5, b = 5) => a + b;

console.log(defaultParameterValues());
console.log(defaultParameterValues(1));
console.log(defaultParameterValues(1, 1));

// Rest parameters
var restParameters = (...a) => a.reduce((i, j) => i + j, 0);
console.log(restParameters(1, 1, 1));
console.log(restParameters(10, 10));
console.log(restParameters(5));

// Spread operator
var arr1 = [3, 4, 5];
var arr2 = [1, 2, ...arr1];
console.log(arr2);

var [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`a: ${a}, b: ${b}, others: ${others}`);