// Default parameters
// function multiply(firstOperand, secondOperand = 1) {
//   console.log('firstOperand', firstOperand)
//   console.log('secondOperand', secondOperand)
//   return firstOperand * secondOperand;
// }

// console.log('Result is: ', multiply(5, 2)); // expected output: 10
// console.log('Result is: ', multiply(5)); // expected output: 5

function functionName() {
  // some statements in the function body.
}

const arrowFunctionName = () => {
  // some statements in the function body.
};

const multiply = (firstOperand, secondOperand = 1) => {
  console.log('firstOperand', firstOperand);
  console.log('secondOperand', secondOperand);
  return firstOperand * secondOperand;
};

// in case we have only one statement in the function body
// we could skip the { }'s and the return keyword
// const multiply = (firstOperand, secondOperand = 1) =>
//   firstOperand * secondOperand;
// const addOnetoNumber = (num) => num + 1;

// If there is only one parameter for the function, then we can skip the ('s)
// const addOnetoNumber = (num) => num + 1;

// An IIFE using normal function syntax
(function (num) {
  return num + 1;
})(5); 

// An IIFE using the arrow function syntax
(num => num + 1)(5);

//function definition
const checkRainStatus = (currentWeather) => {
  if (currentWeather.rain) {
    return 'Please take your rain jackers';
  } else {
    return `Don't worry about the rain`;
  }
};

// function call OR where the function execution is triggered.
console.log(checkRainStatus({ rain: true }));

// const checkRainStatusSimplified = (currentWeather) => {
//   return currentWeather.rain ? 'Please take your rain jackets': `Don't worry about the rain now`;
// };
// console.log(checkRainStatusSimplified({ rain: true }));

// const checkRainStatusSimplified = currentWeather => currentWeather.rain ? 'Please take your rain jackets': `Don't worry about the rain now`;
// console.log(checkRainStatusSimplified({ rain: true }));

// call the function with the name 'functionName'.
functionName();

// function normally are required to be found in the same javascript file it is being called.
aNonExistingFunction();
