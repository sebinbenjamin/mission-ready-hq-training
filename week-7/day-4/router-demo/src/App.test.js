import { render, screen } from '@testing-library/react';
import App from './App';

describe('These test do this great thing about something',() => {
  test('Checks 1 functionality', () => { // actual test code
    expect(2 + 2).toBe(4);
  });
  test('Checks second functionality', () => { // actual test code
    expect(2 + 2).toBe(4);
  });

  test('Checks third functionality', () => { // actual test code
    expect(2 + 8).toBe(10);
  });
});
