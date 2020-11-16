/**
 *
 * A Promise is an object that represents an intermediate state of an operation.
 * In effect, a promise that a result of some kind will be returned at some point in the future
 *
 */

let promise = new Promise(function (resolve, reject) {
  // the function is executed automatically when the promise is constructed
  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve('done'), 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

/**
 * A Promise object is created that takes two functions; resolve() and reject().
 * The resolve() is used if the process is successful and
 * the reject() is used when an error occurs in the promise.
 */
const count = true;
// To create a promise object, we use the Promise() constructor.
const countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve('There is a count value.');
  } else {
    reject('There is no count value');
  }
});
console.log(countValue);


