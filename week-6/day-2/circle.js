const { PI } = Math; // object destructuring

// arrow functions
const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;

// method exported for use in other files
module.exports.area = area;
exports.circumference = circumference;

// Single default Export
module.exports = {
  area, circumference
}
