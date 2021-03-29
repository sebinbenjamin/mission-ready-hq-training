/**
 * A method which gets your location
 * @returns A promise object
 */
const getLocation = () => {
  // Promise EXECUTER
  return new Promise((res, rej) => {
    if (!navigator.geolocation) {
      rej(`Geolocation is not supported by your browser`);
    }
    console.log('Loading location ...');
    setTimeout(() => rej('Timeout Exceeded'), 10 * 1000);.then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log('Unable to get user location', err);
    });
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};

// Method called and promise being CONSUMED
getLocation()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('Unable to get user location', err);
  });

// const resutlOfGetLoc = getLocation();
// resutlOfGetLoc
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('Unable to get user location', err);
//   });
