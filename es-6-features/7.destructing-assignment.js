// Array Matching
var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
console.log(`A: ${a}, B: ${b}`);

// Object matching
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        e: {
            f: 5
        }
    }
};

var { a, b, c } = obj;
console.log(`a: ${a}, b: ${b}, c: ${c}`);

// Deep matching
var { a, b, c, d: { e: f } } = obj;
console.log(f);

// Default values
var {a , j = 3} = obj;
console.log(`a: ${a}, j: ${j}`);

// http://es6-features.org/#ParameterContextMatching