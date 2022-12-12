// The Promise.allSettled method accepts an array of Promises and only resolves when all of them are settled – either resolved or rejected.
// This was not available natively before, even though some close implementations like "race" and "all" were available.

const myPromiseArray = [
    Promise.resolve(100),
    Promise.resolve(null),
    Promise.reject(new Error('Oh No !')),
]; 

Promise.allSettled(myPromiseArray).then((results)=>{
    console.log('All Promises Settled', results);
});