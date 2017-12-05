// for-in loop vs the for-of
var list = [3, 5, 7];
list.foo = 'bar';

// Iterates properties
for (var key in list) {
  console.log(key);
}

// Iterates values only
for (var value of list) {
  console.log(value);
}

// Iterator class
let myClass = {
    [Symbol.iterator]() {
        var nextIndex = 0;
        var values = [1,2,3,4,5,6,7,9];   

        return {
           next () {
            return nextIndex < values.length ? {value: values[nextIndex++], done: false} : {done: true};
           }
        }
    }
}

for (let n of myClass) {
    console.log(n)
}

