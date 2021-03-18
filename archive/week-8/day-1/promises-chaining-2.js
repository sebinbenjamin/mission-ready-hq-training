const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
    };
    resolve(phone); // made available in the then of willIGetNewPhone
  } else {
    reject('mom is not happy'); // made available for use in the catch of willIGetNewPhone
  }
});

const showOff = (phone) => {
  const message = `Hey friend, I have a new  ${phone.color} ${phone.brand} phone`;
  console.log(message);
};

// call our promise
const askMom = () => {
  willIGetNewPhone.then(showOff).catch((error) => {
    console.log(error);
  });
};

askMom();
