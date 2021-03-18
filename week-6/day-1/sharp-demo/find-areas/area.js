// importing the methods exported from the circle module
// const circle = require('./../helper-functions/circle');

// console.log('Area of the circle is ', circle.areaOfCircle(10));

// De-structured import.
// const { areaOfCircle, myLuckyNumber } = require('../helper-functions/circle');
// ./  - start searching in the current folder
// ../ - start searching for the path one level up
// ../../ -

// console.log('Area of the circle is ', areaOfCircle(10));

// console.log('myLuckyNumber is', myLuckyNumber);

// const { result } = require('../random-feature/index.js');
// console.log('From area.js', result);

// const { result } = require('../random-feature');

// 'index.js' file is treated in a special way by require.
// const { result } = require('../random-feature/index.js');

// console.log('From area.js', result);

// const { areaOfCircle, myLuckyNumber } = require('../helper-functions/circle');
// const { areaOfCircle, myLuckyNumber } = require('../helper-functions/circle');

// console.log('myLuckyNumber: ', myLuckyNumber);
// console.log('Area: ' , areaOfCircle(100));

const { areaOfCircle } = require('../helper-functions/circle');

console.log('Area using default export', areaOfCircle(199));
