// Iterators
let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0, cur = 1
        return {
           next () {
               [ pre, cur ] = [ cur, pre + cur ]
               return { done: false, value: cur }
           }
        }
    }
}

// The for...of statement creates a loop iterating over iterable objects
for (let n of fibonacci) {
    if (n > 1000)
        break
    console.log(n)
}
