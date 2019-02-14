import constructItinerary from '../41-50/Problem41';
import MaxStack from '../41-50/Problem43';
import countInversions from '../41-50/Problem44';
import longestPalindrome from '../41-50/Problem46';

describe('Problems 41 - 50', () => {
  test('Problem 41', () => {
    expect(
      constructItinerary(
        [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']],
        'YUL'
      )
    ).toEqual(['YUL', 'YYZ', 'SFO', 'HKO', 'ORD']);

    expect(
      constructItinerary([['SFO', 'COM'], ['COM', 'YYZ']], 'COM')
    ).toBeNull();

    expect(
      constructItinerary([['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']], 'A')
    ).toEqual(['A', 'B', 'C', 'A', 'C']);

    expect(
      constructItinerary(
        [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']],
        'JFK'
      )
    ).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);

    expect(
      constructItinerary(
        [
          ['JFK', 'SFO'],
          ['JFK', 'ATL'],
          ['SFO', 'ATL'],
          ['ATL', 'JFK'],
          ['ATL', 'SFO']
        ],
        'JFK'
      )
    ).toEqual(['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO']);
  });

  test('Problem 43 Max Stack', () => {
    const maxStack = new MaxStack();
    maxStack.push(-2);
    maxStack.push(0);
    maxStack.push(-3);
    expect(maxStack.max()).toBe(0);
    expect(maxStack.pop()).toBe(-3);
    expect(maxStack.max()).toBe(0);
    expect(maxStack.pop()).toBe(0);
    expect(maxStack.max()).toBe(-2);
    expect(maxStack.pop()).toBe(-2);
    expect(maxStack.max()).toBeNull();
    expect(maxStack.pop()).toBeNull();
  });

  test('Problem 44 Count Inversions', () => {
    expect(countInversions([1, 2, 3, 4, 5])).toBe(0);
    expect(countInversions([2, 4, 1, 3, 5])).toBe(3);
    expect(countInversions([5, 4, 3, 2, 1])).toBe(10);
  });

  test('Problem 46 Longest Palindrome', () => {
    expect(longestPalindrome('aabcdcb')).toBe('bcdcb');
    expect(longestPalindrome('bananas')).toBe('anana');
    expect(longestPalindrome('banana')).toBe('anana');
    expect(longestPalindrome('bbbbccc')).toBe('bbbb');
    expect(longestPalindrome('cbbd')).toBe('bb');
    expect(['aba', 'bab']).toEqual(
      expect.arrayContaining([longestPalindrome('babad')])
    );
    expect(['a', 'b', 'c', 'd']).toEqual(
      expect.arrayContaining([longestPalindrome('abcd')])
    );
  });
});
