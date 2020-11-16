/**
 *
 * A Promise is an object that represents an intermediate state of an operation.
 * Promises are useful when you have to handle more than one asynchronous task one after another.
 *
 */

// returns a promise, stored to countValue
const countValue = new Promise((resolve, reject) => {
  resolve('Promise resolved');
});

// then() is executed when promise is resolved successfully
countValue
  .then((result) => {
    console.log(result);
  })
  .then(() => {
    console.log('You can call multiple functions this way.');
  })
  // catch() method is used with the callback when the promise is rejected or if an error occurs.
  // returns a promise
  // executes if there is an error
  .catch((result) => {
    console.log(result);
  });
