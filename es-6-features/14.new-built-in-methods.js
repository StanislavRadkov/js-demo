// Array Element Finding
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr.find(x => x > 4));
console.log(arr.findIndex(x => x > 4));

// String repeating
console.log('Jar '.repeat(2));

// String Searching
let s = 'hello';
console.log(s.startsWith("ello", 1));
console.log(s.endsWith("hell", 4));
console.log(s.includes("ell"));
console.log(s.includes("ell", 1));
console.log(s.includes("ell", 2));   

// Numbers
console.log(Number.isNaN(42));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(123));

// Safety checking
console.log(Number.isSafeInteger(42));
console.log(9007199254740992 > Number.MAX_SAFE_INTEGER);
console.log(Number.isSafeInteger(9007199254740992));

// Availability of a standard Epsilon value for more precise comparison of floating point numbers.
console.log(0.1 + 0.2 === 0.3)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)