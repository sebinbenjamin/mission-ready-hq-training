import React from 'react';
import ReactDom from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Button from './button';

// cleanup() removes stuff from previous test runs.
// afterEach() is used to run cleanup() before the tests are run.
afterEach(cleanup);

// This one uses the normal ReactDOM.
test('Button renders without issues (using ReactDom)', () => {
  const div = document.createElement('div');
  ReactDom.render(<Button></Button>, div);
});

// This one uses React Testing Library.
test('Button renders correctly (using React Testing library)', () => {
  const { getByTestId } = render(<Button label="click me please"></Button>);
  expect(getByTestId('testButton')).toHaveTextContent('click me please');
});

// This one uses React Testing Library too.
test('Button renders correctly (using React Testing library)', () => {
  const { getByTestId } = render(<Button label="Save"></Button>);
  expect(getByTestId('testButton')).toHaveTextContent('Save');
});

// Snapshot example (not discussed yet)
test('Matches snapshot', () => {
  const tree = TestRenderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});