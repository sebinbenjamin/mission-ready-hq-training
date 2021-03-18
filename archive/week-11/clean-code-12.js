function makeInitialState(x, y) {
  const state = [];
  if (x.a || y.b) {
    state.push(x.b && y);
  }
  return state;
}

// easier to read than above
function makeInitialState(x, y) {
  const state = [];
  const isXATrue = x.a == true;
  const isXBTrue = x.b == true;
  const isYBTrue = y.b == true;
  if (isXTrue || isYBTrue) {
    state.push(isXBTrue && y);
  }
  return state;
}

function main(meaning) {
  var day = true;

  if (meaning === 42) {
    while (day) {
      shuffle();
      if (tired) {
        // JSHint: Blocks are nested too deeply (3).
        sleep();
      }
    }
  }
}

function login(request, onSuccess) {
  // ...
}

// JSHint: Too many parameters per function (4).
function logout(request, isManual, whereAmI, onSuccess) {
  // ...
}

// add two numbers
function calculate(x, y) {
  return x + y;
}

function findSum(firstNum, secondNumber) {
  return firstNum + secondNumber;
}

// Maximum time to run is 10 mts according to instruction manual of the motor
// 10 X 60 X 60 = 36000
MAX_RUNTIME = 36000;

// Even better way
MAX_RUNTIME = 10 * 60 * 60;

// if(timeElasped > 36000)
// {

// }

// avoiding magic numbers
if (timeElasped > MAX_RUNTIME) {
}

// admin, student & teacher
if (currentUser === 'Student' || currentUser === 'Teacher') {
  //do student teacher stuff
} else if (currentUser === 'admin') {
  //'Admin' instead of 'admin'
  //do admin stuff
}

const userTypes = {
  STUDENT: 'student',
  TEACHER: 'teacher',
  ADMIN: 'admin',
  PARENT: 'parent',
};

// Avoiding magic strings
if (currentUser === userTypes.STUDENT || currentUser === userTypes.TEACHER) {
  //do student teacher stuff
} else if (currentUser === userTypes.ADMIN) {
  //'Admin' instead of 'admin'
  //do admin stuff
}

const isStudent = currentUser === userTypes.STUDENT;
const isTeacher = currentUser === userTypes.TEACHER;
const isAdmin = currentUser === userTypes.ADMIN;

if (isStudent || isTeacher) {
  //do student teacher stuff
} else if (isAdmin) {
  //'Admin' instead of 'admin'
  //do admin stuff
}
