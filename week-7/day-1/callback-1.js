// function first(){
//   console.log(1);
// }

// function second(){
//   console.log(2);
// }

// first();
// second();


// console.log('Immediate console.log 1');
// setTimeout(() => console.log('This is after 5 seconds'), 5 * 1000);
// console.log('Immediate console.log 2');

function first() {
  // Simulate a code delay
  console.log(0);
  setTimeout(() => console.log(1), 5 * 1000);// works async
  console.log(1.1);
}

function second() {
  console.log(2);
}

first();
second();
