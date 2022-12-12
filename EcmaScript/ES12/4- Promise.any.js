// Promise.any accepts an iterable of promises and resolves as soon as one of the promise is resolved. If none of the promises aren't resolved then an AggregateError error is returned as an array with individual errors for each promise.
// Promise.any works in the opposite way of Promise.all() where all iterable promises needs to be resolved for a single promise to resolve.

// // Exemple 1 : 
// console.log(" =============== Promise Any ==================");

// const A = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('A resolved'), 500)
// })
// const B = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('B resolved'), 1000)
// })
// const C = new Promise((reject) => {
//     setTimeout(() => reject('C rejected'), 2000)
// })
// const D = new Promise((resolve, reject) => {
//     setTimeout(() => reject('D rejected'), 2500)
// })
// const E = new Promise((resolve, reject) => {
//     setTimeout(() => reject('E rejected'), 3500)
// })
// const resolvedPromises = async () => {
//     const resolved = await Promise.any([A, B, C]);
//     console.log('One of promise resolved faster : ', resolved)
// }
// const rejectedPromises = async () => {
//     const rejected = await Promise.any([D, E]);
//     console.log('All promise rejected:', rejected) // Aggregate Error: All promises were rejected
// }

// resolvedPromises()
// rejectedPromises()

// Exemple 2 : 
const e1 = new Promise((resolve, reject) => {
    reject(new Error('Error 1'));
  });
  const e2 = new Promise((resolve, reject) => {
    reject(new Error('Error 2'));
  });
  Promise.any([e1, e2])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
// output: "AggregateError: All promises were rejected"



