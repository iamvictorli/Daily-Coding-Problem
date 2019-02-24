import pow from '../61-70/Problem61';
import uniquePaths from '../61-70/Problem62';

describe('Problems 61 - 70', () => {
  test('Problem 61 Pow(x, y)', () => {
    expect(pow(2, 10)).toBe(1024);
    expect(pow(2, -2)).toBe(0.25);
  });

  test('Problem 62 Unique Paths', () => {
    expect(uniquePaths(2, 2)).toBe(2);
    expect(uniquePaths(5, 5)).toBe(70);
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
  });
});
