// async functions - return promise.
async function greet([ firstName, secondName ]) {
   return `Hello, ${firstName} ${secondName}!`;
}

greet(['Jon', 'Snow']).then(greeting => {
    console.log(greeting);
});

// async functions - promise is rejected on exception
async function fail() {
    throw new Error('Opps!');
}
fail().catch((err) => console.log(err));

// Await example (can only be used in async functions)
async function awaitGreet(names) {
    return await greet(names);
}

awaitGreet(['Jon', 'Snow'])
    .then((greeting) => console.log(greeting));

// Await error
async function awaitFail() {
    return await fail();
}

awaitFail()
    .then(() => console.log('Success!'))
    .catch((err) => console.log('Fail: ', err));
