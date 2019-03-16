import letterCombinations from '../81-90/Problem81';

describe('Problems 81 - 90', () => {
  const letterMapping = new Map();
  letterMapping.set('2', ['a', 'b', 'c']);
  letterMapping.set('3', ['d', 'e', 'f']);
  letterMapping.set('4', ['g', 'h', 'i']);
  letterMapping.set('5', ['j', 'k', 'l']);
  letterMapping.set('6', ['m', 'n', 'o']);
  letterMapping.set('7', ['p', 'q', 'r', 's']);
  letterMapping.set('8', ['t', 'u', 'v']);
  letterMapping.set('9', ['w', 'x', 'y', 'z']);

  test('Letter Combinations of a Phone Number', () => {
    expect(letterCombinations(letterMapping, '2')).toEqual(['a', 'b', 'c']);
    expect(letterCombinations(letterMapping, '3')).toEqual(['d', 'e', 'f']);
    expect(letterCombinations(letterMapping, '23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf'
    ]);
  });
});
