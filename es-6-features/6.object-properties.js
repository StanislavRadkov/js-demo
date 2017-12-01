// Shorter syntax for common object property definition idiom.
var x = 6, y = 7;
var obj = { x, y };

console.log(obj);

// Computed Property Names
var computerProperties = {
    foo: "bar",
    [ "baz" + 123 ]: 42
}
console.log(computerProperties);

// Method properties
var methodProperties = {
    sum(a, b)  {
        return a + b;
    },
    x: 4,
    y: 5
}