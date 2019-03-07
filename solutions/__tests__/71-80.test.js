import largestPathValue from '../71-80/Problem72';

describe('Problems 71 - 80', () => {
  test('Problem 72 Largest Path Value in a Graph', () => {
    expect(largestPathValue('ABACA', [[0, 1], [0, 2], [2, 3], [3, 4]])).toBe(3);
    expect(largestPathValue('A', [[0, 0]])).toBeNull();

    expect(
      largestPathValue('AAAAAA', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(6);

    expect(
      largestPathValue('AAAABB', [
        [0, 3],
        [0, 5],
        [0, 4],
        [0, 2],
        [1, 0],
        [1, 4],
        [2, 3],
        [2, 5],
        [4, 2],
        [3, 5]
      ])
    ).toBe(4);
  });
});
