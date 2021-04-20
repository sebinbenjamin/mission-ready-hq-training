const fetch = require('node-fetch');

// Normal function
function hello() {
  return 'Hello';
}
// console.log(hello());

const hello1 = () => {
  return 'Hello';
};
// console.log(hello1());

// Asynchronous function
async function helloAsync() {
  return 'Hello';
}
// console.log(helloAsync());

// Asynchronous and with arrow fn syntax.
const helloAsync1 = async () => {
  return 'Hello';
};
// console.log(helloAsync1());
// helloAsync1()
//   .then((result) => {
//     console.log('The value of the promise if it is fulfilled is: ', result);
//   })
//   .catch((error) => {
//     console.log('The value of the promise if it is failed is: ', error);
//   });

// Asynchronous function which contains a fetch call in it.
const helloAsyncFetch = async () => {
  const apiResult = fetch('https://jsonplaceholder.typicode.com/todos/1');
  apiResult
    .then((response) => response.json())
    .then((success) => {
      console.log(success);
    })
    .catch((error) => {
      console.log(error);
    });
};
// console.log(helloAsyncFetch());

const helloAsyncAwaitFetch = async () => {
  const apiResult = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1'
  ).then((res) => res.json());
  return apiResult;
};
// helloAsyncAwaitFetch();

// Just a function returning a promise which gets resolved in 2 seconds
const resolveAfter2Seconds = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Resolveddddd!!!');
    }, 2000);
  });
};

const promiseCall = () => {
  resolveAfter2Seconds().then((success) => {
    console.log('Promise was successful and the result is:', success);
  });
  console.log('After resolveAfter2Seconds.then is called');
};

const promiseCallAsyncAwait = async () => {
    // await keyword used before the promise. 
    const success = await resolveAfter2Seconds();
    console.log('Promise was successful and the result is:', success);
};

promiseCallAsyncAwait();

