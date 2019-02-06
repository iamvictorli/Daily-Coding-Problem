import editDistance from '../31-40/Problem31';
import doesArbitrageExist from '../31-40/Problem32';
import runningMedian from '../31-40/Problem33';
import buildPalindromeByFewestInsertions from '../31-40/Problem34';
import sortColors from '../31-40/Problem35';

describe('Problem 31 - 40', () => {
  test('Problem 31 Edit Distance', () => {
    expect(editDistance('kitten', 'sitting')).toBe(3);
    expect(editDistance('', '')).toBe(0);
    expect(editDistance('', 'abcd')).toBe(4);
    expect(editDistance('abcd', 'abcd')).toBe(0);
    expect(editDistance('horse', 'ros')).toBe(3);
    expect(editDistance('intention', 'execution')).toBe(5);
  });

  test('Problem 32 Does Arbitrage Exist', () => {
    expect(doesArbitrageExist([[3, 4], [4, 3]])).toBe(true);
    expect(doesArbitrageExist([[3, 3], [3, 3]])).toBe(false);

    // https://github.com/Li-Victor/daily-coding-problem/blob/master/assets/Arbitrage.png
    expect(
      doesArbitrageExist([
        [1, 0.8123, 0.6404, 78.125, 0.9784, 0.9924, 0.9465],
        [1.2275, 1, 0.786, 96.55, 1.201, 1.2182, 1.1616],
        [1.5617, 1.2724, 1, 122.83, 1.528, 1.5498, 1.4778],
        [0.0128, 0.0104, 0.0081, 1, 1.2442, 0.0126, 0.012],
        [1.0219, 0.8327, 0.6546, 80.39, 1, 1.0142, 0.9672],
        [1.0076, 0.8206, 0.6453, 79.26, 0.9859, 1, 0.9535],
        [1.0567, 0.8609, 0.6767, 83.12, 1.0339, 1.0487, 1]
      ])
    ).toBe(true);
  });

  test('Problem 33 Find Median from Data Stream', () => {
    expect(runningMedian([2, 1, 5, 7, 2, 0, 5])).toEqual([
      2,
      1.5,
      2,
      3.5,
      2,
      2,
      2
    ]);
    expect(runningMedian([1, 2, 3])).toEqual([1, 1.5, 2]);
  });

  test('Problem 34 Build Palindrome With Fewest Insertions', () => {
    expect(buildPalindromeByFewestInsertions('race')).toBe('ecarace');
    expect(buildPalindromeByFewestInsertions('google')).toBe('elgoogle');
    expect(buildPalindromeByFewestInsertions('racecar')).toBe('racecar');
    expect(buildPalindromeByFewestInsertions('aacecaaa')).toBe('aaacecaaa');
    expect(buildPalindromeByFewestInsertions('aaaecaaa')).toBe('aaacecaaa');
    expect(buildPalindromeByFewestInsertions('abcd')).toBe('abcdcba');
  });

  test('Problem 35 Sort Colors', () => {
    let colors = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];
    sortColors(colors);
    expect(colors).toEqual(['R', 'R', 'R', 'G', 'G', 'B', 'B']);

    colors = ['B', 'R', 'B', 'G', 'G', 'R'];
    sortColors(colors);
    expect(colors).toEqual(['R', 'R', 'G', 'G', 'B', 'B']);

    colors = ['B', 'B', 'B', 'G', 'R', 'R'];
    sortColors(colors);
    expect(colors).toEqual(['R', 'R', 'G', 'B', 'B', 'B']);

    colors = ['B', 'B', 'B'];
    sortColors(colors);
    expect(colors).toEqual(['B', 'B', 'B']);

    colors = ['R', 'R', 'R'];
    sortColors(colors);
    expect(colors).toEqual(['R', 'R', 'R']);

    colors = ['G', 'G', 'G'];
    sortColors(colors);
    expect(colors).toEqual(['G', 'G', 'G']);

    colors = ['R', 'B', 'G'];
    sortColors(colors);
    expect(colors).toEqual(['R', 'G', 'B']);
  });
});
