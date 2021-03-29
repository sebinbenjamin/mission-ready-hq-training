const currentPage = 'parent'
switch (currentPage) {
  case 'home':
    console.log('Home');
    break;
  case 'teach':
  case 'parent':
    console.log('Teach parent');
    // show version 2 of the footer
    break;
}
