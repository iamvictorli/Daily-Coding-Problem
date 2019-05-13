import findAnagramIndices from '../111-120/Problem111';

describe('Problems 111 - 120', () => {
  test('Problem 111 Find All Anagrams in a String', () => {
    expect(findAnagramIndices('abxaba', 'ab')).toEqual([0, 3, 4]);
    expect(findAnagramIndices('cbaebabacd', 'abc')).toEqual([0, 6]);
    expect(findAnagramIndices('abab', 'ab')).toEqual([0, 1, 2]);
  });
});
