/**
 *
 * A Promise is an object that represents an intermediate state of an operation.
 * In effect, a promise that a result of some kind will be returned at some point in the future
 *
 */
//* EXECUTOR - promise1
let promise1 = new Promise((resolve, reject) => {
  // the function is executed automatically when the promise is constructed
  // after 5 second signal that the job is done with the result "done"
  setTimeout(() => resolve('done'), 5 * 1000);
});

// * EXECUTOR - promise2
let promise2 = new Promise((resolve, reject) => {
  // after 5 second signal that the job is finished with an error
  setTimeout(() => reject(new Error('Whoops!')), 3 * 1000);
});

//* CONSUMER - promise1
promise1
.then((success) => {
  console.log('Promise one is successful.', success);
})
.catch((error) => {
  console.log('Promise one has failed.', error);
});


//* CONSUMER - promise2
  promise2.then((success) => {
    console.log('Promise two is successful.', success);
  })
  .catch((err) => {
    console.log('Promise two has failed.', err);
  });

/**
 * A Promise object is created that takes two functions; resolve() and reject().
 * The resolve() is used if the process is successful and
 * the reject() is used when an error occurs in the promise.
 */
const count = true;
// To create a promise object, we use the Promise() constructor.
const countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve('Count Promise: There is a count value.');
  } else {
    reject('Count Promise: There is no count value');
  }
});
console.log(countValue);
