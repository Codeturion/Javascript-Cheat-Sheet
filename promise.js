// CLEANER THAN CALLBACKS
// Basic Promise
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if(a === 2){
        resolve('success');
    } else {
        reject('failed');
    }
})

p.then((message) => { // If promise is resolved
    console.log('Promise fulfilled with ' + message);
}).catch((message) =>{ // If promise is rejected
    console.log('Promise fulfilled with ' + message);
})


//////////////////////////////////////////////////////////////////////
// These promises have only resolve

const recordVideoOne = new Promise((resolve,reject) => {
    resolve('Video 1 recorded');
})
const recordVideoTwo = new Promise((resolve,reject) => {
    resolve('Video 2 recorded');
})
const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 recorded');
})

// Running all promises all the same time
// They wont wait for each other.
// This will output:
// [ 'Video 1 recorded', 'Video 2 recorded', 'Video 3 recorded' ]
Promise.all([recordVideoOne,
recordVideoTwo,
recordVideoThree]).then((messages) => {
    console.log(messages);
})

// This will return the one which finish first.
Promise.race([recordVideoOne,
    recordVideoTwo,
    recordVideoThree]).then((message) => {
    console.log(message);
})


// How to chain?
/*
myPromise
.then(handleResolvedA)
.then(handleResolvedB)
.then(handleResolvedC)
.catch(handleRejectedAny);
 */
/*Handling a rejected promise in each .then() has consequences further down the promise chain. 
Sometimes there is no choice, because an error must be handled immediately. 
In such cases we must throw an error of some type to maintain error state down the chain. 
On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final .catch() statement. 
A .catch() is really just a .then() without a slot for a callback function for the case when the promise is resolved.
 */