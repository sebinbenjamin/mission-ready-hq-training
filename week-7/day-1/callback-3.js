function first(callBackFn1, callBackFn2) {
  // Simulate a code delay
  console.log('First fn called');
  setTimeout(() => {
    console.log('Function in timeout');
    const rainInProgress = true;
    if (rainInProgress) {
      callBackFn1();
    }
    else {
      callBackFn2();
    }
  }, 10 * 1000); // works async
}

function second() {
  console.log('2nd fn called');
}

function third() {
  console.log('3rd fn called');
}

first(second, third);
