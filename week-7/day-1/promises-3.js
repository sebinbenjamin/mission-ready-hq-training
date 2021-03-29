// A promise is an object with two values
// 1. A state -> 'pending' -> 'rejected' OR 'fulfilled'
// 2. A result -> undefined
const newPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done! Everything good. Today is 29/3/21');
  }, 60 * 1000);
  setTimeout(() => {
    reject('The server is taking too long to respond');
  }, 3 * 1000);
});

console.log('Just after creation:', newPromise);

// Code in the then block is called when the promise is resolved
newPromise
  .then((right) => {
    console.log('success', right);
  })
  // Code in the .catch() block is called when the promise is rejected, ie when we have an error
  .catch((wrong) => {
    console.log('error', wrong);
  });
