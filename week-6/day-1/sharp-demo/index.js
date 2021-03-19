// const sharp = require('./node_modules/sharp');
// * Module resolution 
//node appends a ./node_modules/ to whatever we pass without a ./
//  ./node_modules/ + sharp ==> ./node_modules/sharp
//    ../node_modules/sharp
//    ../../node_modules/sharp
const sharp = require('sharp');
// NOT a core module
// +
// NOT a local module (./ is missing)
// Hence considered as 3rd party package
// Tries to find it in node_module

sharp('assets/input-image.jpg')
  .rotate(90)
  // .resize(1200)
  .toFile('assets/rotated-image.jpg', (err, info) => {
    if (err) {
      console.error('Oops!', err.message);
    } else {
      console.log('Image rotated successfully');
    }
  });
