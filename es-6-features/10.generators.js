// Generators
// Generator functions, a special variant of functions where the control flow can be paused and resumed, in order to produce sequence of values (either finite or infinite).
function* fibonacci() {
    let pre = 0, cur = 1
    while (true) {
        [pre, cur] = [cur, pre + cur]
        yield cur
    }
}

for (let n of fibonacci()) {
    if (n > 1000)
        break
    console.log(n)
}

// Object
let fibonacciGenerator = {
    *[Symbol.iterator]() {
        let pre = 0, cur = 1
        while (true) {
            [ pre, cur ] = [ cur, pre + cur ]
            yield cur
        }
    }
}

for (let n of fibonacciGenerator) {
    if (n > 1000)
        break
    console.log(n)
}