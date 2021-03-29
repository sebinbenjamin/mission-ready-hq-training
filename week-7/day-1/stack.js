function1();
console.log('Line 2');

function function1() {
  console.log('Function 1 Before')
  function2();
  console.log('Function 1')
}

function function2() {
  console.log('Function 2 Before')
  function3();
  console.log('Function 2')
}

function function3() {
  console.log('Function 3 executed');
}
