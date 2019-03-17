import letterCombinations from '../81-90/Problem81';
import FileReader from '../81-90/Problem82';

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

  test('Problem 81 Letter Combinations of a Phone Number', () => {
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

  test('Problem 83 read7() and readN() from a file', () => {
    const f1 = new FileReader('Hello world');
    expect(f1.read7()).toBe('Hello w');
    expect(f1.read7()).toBe('orld');
    expect(f1.read7()).toBe('');
    expect(f1.read7()).toBe('');

    const f2 = new FileReader('Hello world');
    expect(f2.readN(7)).toBe('Hello w');
    expect(f2.readN(7)).toBe('orld');
    expect(f2.readN(7)).toBe('');
    expect(f2.readN(7)).toBe('');

    const f3 = new FileReader('Hello world');
    expect(f3.readN(9)).toBe('Hello wor');
    expect(f3.readN(9)).toBe('ld');
    expect(f3.readN(9)).toBe('');
    expect(f3.readN(9)).toBe('');

    const f4 = new FileReader('Hello world');
    expect(f4.readN(2)).toBe('He');
    expect(f4.readN(4)).toBe('llo ');
    expect(f4.readN(2)).toBe('wo');
    expect(f4.readN(4)).toBe('rld');
    expect(f4.readN(2)).toBe('');
  });
});
