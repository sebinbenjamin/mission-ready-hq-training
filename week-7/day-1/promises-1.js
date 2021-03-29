let done = false;

//* EXECUTOR
// some task whose value is not forseeable in the present.
// Executor part of Promise - executes some operations which decides the fate of the promise
const isItDoneYet = new Promise((resolve, reject) => {
  // resolves/fullfil promise. - handled by the .then()
  if (done) {
    resolve('Message : Here is the thing I built'); // success state => .then() block gets exec
  }
  // rejects the promise - handled by the .catch()
  else {
    reject('Message : Failed task'); // error  state => .catch block is exec.
  }
});

//* CONSUMER
// Use of a Promise value.
// What to do in a potential failure or success scenario
isItDoneYet
  .then((ok) => {
    // statements to handle a potential success
    console.log('Everything good.', ok);
  })
  .catch((err) => {
    // statements to handle a potential failure
    console.error('Something is bad.', err);
  });
