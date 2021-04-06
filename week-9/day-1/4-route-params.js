const express = require('express');
const teacherRouter = express.Router();

// /teacher
teacherRouter.get('/', (req, res) => {
  console.log('Get called');
  // Express automatically sets the content type header as JSON
  res.send({
    name: 'Sebin',
    role: 'Tech',
  });
});

// /teacher/add
teacherRouter.post('/add', (req, res) => {
  console.log('POST called');
  // Express automatically sets the content type header as JSON
  res.send('Teacher added');
});

// Using Route Params
// /teacher/delete/56/color/green => id_no is 56 & color is green
teacherRouter.delete('/del/:id_no/color/:color_code', (req, res) => {
  const { id_no, color_code } = req.params;

  console.log('Delete called, id_no');
  // Express automatically sets the content type header as JSON
  res.send('Teacher ' + id_no + ' removed' + ' with color ' + color_code);
});

module.exports = teacherRouter;
