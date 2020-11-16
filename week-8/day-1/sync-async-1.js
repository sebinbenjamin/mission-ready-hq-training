// Synchronous execution
console.log(1);
console.log(2);
console.log(3);
console.log(4);
// Asynchronous execution
setTimeout(() => console.log(5), 0);
// Synchronous execution
console.log(6);
// Asynchronous execution
setTimeout(() => console.log(7), 0);

// Asynchronous execution
console.log('Before setTimeout');
const timeout = 10000;
setTimeout(() => {
  console.log('Hi after', timeout, 'sec')
}, timeout);
console.log('After setTimeout');