function first(callBackFn1, callBackFn2, callBackFn3, callBackFn4, callBackFn5) {
  // Simulate a code delay
  setTimeout(() => {
    callBackFn1(() =>
      // statement of code
      callBackFn2(() => {
        // statement of code
        callBackFn3(() =>
          // statement of code
          callBackFn4(() => {
            // statement of code
            callBackFn5();
          })
        );
      })
    );
  }, 10 * 1000);
}

function second() {
  console.log('2nd fn called');
}

function third() {
  console.log('3rd fn called');
}

first(second, third);
