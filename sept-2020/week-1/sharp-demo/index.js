const sharp = require('sharp');

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
