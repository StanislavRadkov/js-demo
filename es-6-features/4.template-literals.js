
// Access the raw template string conten
function test (strings, ...values) {
    console.log(arguments)
}
test `${10} ${10+10} ${10+10+10} this is a test`