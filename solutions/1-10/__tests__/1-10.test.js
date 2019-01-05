const TwoSum = require('../Problem1');

test('Problem 1 Two Sum', () => {
  expect(TwoSum([2, 7, 11, 15], 9)).toBe(true);
  expect(TwoSum([], 19)).toBe(false);
  expect(TwoSum([2, 11, 99, 15], 26)).toBe(true);
  expect(TwoSum([2, 11, 99, 16], 26)).toBe(false);
});
