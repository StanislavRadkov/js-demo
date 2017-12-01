// Native promises
// Resolve
var promise1 = new Promise(function(resolve, reject) {  
    setTimeout(() => resolve('Successful!'), 2000);
 });

 promise1.then((result) => console.log(result));

 // reject
var promise2 = new Promise(function(resolve, reject) {  
    setTimeout(() => reject('Failed'), 5000);
 });

 promise2
 .catch((result) => console.log(result));

 // Wait multiple promises
 Promise.all([promise1, promise2])
    .then(() => console.log('All successful!'))
    .catch(() => console.log('At least one failed!'));