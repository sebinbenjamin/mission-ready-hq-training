console.log('Before the try');

try {
  nonExistentFunction();
} 
// A catch-block contains statements that specify what to do if an exception is thrown in the try-block
catch (error) {
  console.log(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}

console.log('After the try');
console.log('After the try');
console.log('After the try');
console.log('After the try');
console.log('After the try');
console.log('After the try');

