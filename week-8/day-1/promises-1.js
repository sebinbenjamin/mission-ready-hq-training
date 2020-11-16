let done = false;

const isItDoneYet = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Here is the thing I built'), 3000);
  setTimeout(() => reject('Error, I got here first'), 2999);
});

const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log('Everything good', ok);
    })
    .catch((err) => {
      console.error('Something is bad', err);
    });
};

checkIfItsDone();
