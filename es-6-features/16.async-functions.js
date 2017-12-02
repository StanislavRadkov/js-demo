// async functions - return promise.
async function greet([ firstName, secondName ]) {
   return `Hello, ${firstName} ${secondName}!`;
}

var args = ['Jon', 'Snow'];
greet(args).then(greeting => {
    console.log(greeting); 
});  

// async functions - promise is rejected on exception
async function fail() {
    throw new Error('Opps!');
}
fail().catch((err) => console.log(err));