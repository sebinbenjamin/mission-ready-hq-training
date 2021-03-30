const fs = require('fs');

fs.rename('./hello-renamed.js', './hello.txt', (err) => {
  if (!err) {
    console.log('Renaming successful');
  } else {
    console.log('Error', err.message);
  }
});
