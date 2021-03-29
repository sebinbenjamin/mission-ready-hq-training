/**
 *
 * A Promise is an object that represents an intermediate state of an operation.
 * Promises are useful when you have to handle more than one asynchronous task one after another.
 *
 */

// returns a promise, stored to countValue
const countValue = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1 resolved after 2 sec'), 2000);
});

// then() is executed when promise is resolved successfully
// * Consumer of countValue Promise
countValue
  .then((result1) => {
    console.log('CONSUMER Promise 1:', result1);
    return new Promise((res, rej) =>
      setTimeout(() => res('Promise 2 success after 5 sec:'), 5000)
    );
  })
  .then((result2) => {
    console.log('CONSUMER Promise 2', result2);
    console.log('You can call multiple functions this way.');
  })
  // catch() method is used with the callback when the promise is rejected or if an error occurs.
  // returns a promise
  // executes if there is an error
  .catch((result) => {
    console.log(result);
  });
