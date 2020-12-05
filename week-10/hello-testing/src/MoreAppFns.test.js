import { sum } from './App';

describe('Addition Function', () => {
  // Unit tests for the sum method we wrote
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 0 + 5 to equal 5', () => {
    expect(sum(0, 5)).toBe(5);
  });

  // This is an example for a failing test
  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(1);
  });
});
