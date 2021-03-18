const area = (radius) => {
  console.log('This is in the circle.js file');
  return Math.PI * radius * radius;
};
// console.log('Area of the circle is ', areaOfCircle(10));

const myLuckyNumber = 101;

// makes things available to outside this file/module
// module.exports = {
//   areaOfCircle,
//   myLuckyNumber
// };

// module.exports.areaOfCircle = areaOfCircle;
// module.exports.myLuckyNumber = myLuckyNumber;

// we can change names of what we export. So it can be called a different way outside this module
// module.exports.areaOfCircle = area;

// same as above
// exports.areaOfCircle = area;

// RECOMMENDED in most cases.
module.exports = {
  areaOfCircle: area,
  myLuckyNumber,
};

// module.exports = 'Hellooooooo default export'
// default export syntax in case we have just one property or function to export 
// module.exports = area;