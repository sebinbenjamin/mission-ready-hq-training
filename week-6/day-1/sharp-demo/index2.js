const sharp = require('sharp');
// import 'React' from 'react' sharp instead of react

sharp('assets/input-image.jpg')
  .rotate(90)
  .toFile('assets/rotated-image.jpg', (err, info) => {
    if (err) {
      console.error('Oops!', err.message);
    } else {
      console.log('Image rotated successfully');
    }
  });
