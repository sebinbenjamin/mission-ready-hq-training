const express = require('express');
const cors = require('cors');

const studentRouter = require('./3-router-instance');
const teacherRouter = require('./4-route-params');

// Instantiate an application by calling the express() method
const app = express();

// Allows all CORS requests - ignoring security for NOW.
app.use(cors());

app.use('/student', studentRouter); // /student + /hello => /student/hello
app.use('/teacher', teacherRouter); // /teacher + /hello => /teacher/hello

app.listen(3000, () => console.log('Server ready at port 3000'));
