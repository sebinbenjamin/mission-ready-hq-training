const fs = require('fs');

fs.rename('./pathParamsRenamed.js', './pathParams.js', (err) => {
  if (!err) {
    console.log('Renaming successful');
  } else {
    console.log('Error', err.message);
  }
});
