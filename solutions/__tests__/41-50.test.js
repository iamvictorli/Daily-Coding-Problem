import TreeNode from '../Data-Structures/TreeNode';

import constructItinerary from '../41-50/Problem41';
import subsetSum from '../41-50/Problem42';
import MaxStack from '../41-50/Problem43';
import countInversions from '../41-50/Problem44';
import longestPalindrome from '../41-50/Problem46';
import maxProfit from '../41-50/Problem47';
import constructTree from '../41-50/Problem48';

describe('Problems 41 - 50', () => {
  test('Problem 41 Reconstruct Itinerary', () => {
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

  test('Problem 42 Subset Sum', () => {
    expect(subsetSum([12, 1, 61, 5, 9, 2], 24)).toEqual([12, 1, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 15)).toEqual([1, 5, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 16)).toEqual([5, 9, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 17)).toEqual([12, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 18)).toEqual([12, 1, 5]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 19)).toEqual([12, 5, 2]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 20)).toEqual([12, 1, 5, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 21)).toEqual([12, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 22)).toEqual([12, 1, 9]);
    expect(subsetSum([12, 1, 61, 5, 9, 2], 23)).toEqual([12, 9, 2]);

    expect(subsetSum([12, 1, 61, 5, 9, 2], 25)).toBeNull();

    expect(subsetSum([2, 3, 7, 8, 10], 9)).toEqual([2, 7]);
    expect(subsetSum([2, 3, 7, 8, 10], 10)).toEqual([10]);
    expect(subsetSum([2, 3, 7, 8, 10], 11)).toEqual([3, 8]);

    expect(subsetSum([2, 3, 7, 8, 10], 30)).toEqual([2, 3, 7, 8, 10]);

    expect(subsetSum([2, 3, 7, 8, 10], 14)).toBeNull();
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

  test('Problem 47 Best Time To Buy and Sell Stock', () => {
    expect(maxProfit([9, 11, 8, 5, 7, 10])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([])).toBe(0);
  });

  test('Problem 48 Construct Binary Tree from Preorder and Inorder Traversal', () => {
    const tree = new TreeNode('a');
    tree.left = new TreeNode('b');
    tree.right = new TreeNode('c');
    tree.left.left = new TreeNode('d');
    tree.left.right = new TreeNode('e');
    tree.right.left = new TreeNode('f');
    tree.right.right = new TreeNode('g');
    expect(
      constructTree(
        ['a', 'b', 'd', 'e', 'c', 'f', 'g'],
        ['d', 'b', 'e', 'a', 'f', 'c', 'g']
      )
    ).toEqual(tree);

    const tree1 = new TreeNode('a');
    tree1.left = new TreeNode('b');
    tree1.right = new TreeNode('c');
    tree1.right.left = new TreeNode('d');
    tree1.right.right = new TreeNode('e');
    expect(
      constructTree(['a', 'b', 'c', 'd', 'e'], ['b', 'a', 'd', 'c', 'e'])
    ).toEqual(tree1);
  });
});
