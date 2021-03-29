function first(callBackFn) {
  // Simulate a code delay
  console.log('First fn called');
  setTimeout(() => {
    console.log('Function in timeout');
    callBackFn();
  }, 10 * 1000); // works async
}

function second() {
  console.log("2nd fn called");
}

first(second);