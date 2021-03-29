// const isMomHappy = true;
const isMomHappy = false;

// Promise 1 EXECUTOR
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone); // made available in the then of willIGetNewPhone
  } else {
    reject('Mom is not happy'); // made available for use in the catch of willIGetNewPhone
  }
});

const showOff = ({color, brand}) => {
  const message = `Hey friend, I have a new  ${color} ${brand} phone`;
  console.log(message);
};

// call our promise
// Promise 1 CONSUMER
willIGetNewPhone.then(showOff).catch((error) => {
  console.log("Oops. No luck today:", error);
});
