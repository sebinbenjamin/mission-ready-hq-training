// Normal Function
function add(x, y) {
  return x + y;
}

// Async Function - has an extra keyword before the function
async function add(x, y) {
  return x + y;
}

// Async Arrow Fn
const add = async (x, y) => {
  // some synchronous statement here
  // some synchronous statement here
  // some synchronous statement here
  // some synchronous statement here
  // * An Asynchronous statement;
  // await synchronous statement here |||| Another Asynchronous statement => get converted into a synchronous one
  // some synchronous statement here
  // some synchronous statement here
  // some synchronous statement here
  return x + y;
};

// await can only be used in an async function
const doubleAfter2Seconds = (x) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}
// await pauses the flow of execution until the promises are settled (ie either fulfilled or rejected)
const addAsync = async (x) => {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});

