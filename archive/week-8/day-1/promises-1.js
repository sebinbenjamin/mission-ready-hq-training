let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
  // resolves/fullfil promise. - handled by the .then()
  if (done) {
    resolve('Message : Here is the thing I built');
  }
  // rejects the promise - handled by the .catch()
  else {
    reject('Message : Failed task');
  }
});

isItDoneYet
  .then((ok) => {
    console.log('Everything good.', ok);
  })
  .catch((err) => {
    console.error('Something is bad.', err);
  });
