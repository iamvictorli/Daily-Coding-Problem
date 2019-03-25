import TreeNode from '../Data-Structures/TreeNode';

import letterCombinations from '../81-90/Problem81';
import FileReader from '../81-90/Problem82';
import invertTree from '../81-90/Problem83';
import numIslands from '../81-90/Problem84';
import oneOrZero from '../81-90/Problem85';
import minParenToRemove from '../81-90/Problem86';
import division from '../81-90/Problem88';
import validateBST from '../81-90/Problem89';

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

  test('Problem 84 Invert Binary Tree', () => {
    const a1 = new TreeNode('a');
    const b1 = new TreeNode('b');
    const c1 = new TreeNode('c');
    const d1 = new TreeNode('d');
    const e1 = new TreeNode('e');
    const f1 = new TreeNode('f');

    a1.left = b1;
    a1.right = c1;
    b1.left = d1;
    b1.right = e1;
    c1.left = f1;

    const a2 = new TreeNode('a');
    const b2 = new TreeNode('b');
    const c2 = new TreeNode('c');
    const d2 = new TreeNode('d');
    const e2 = new TreeNode('e');
    const f2 = new TreeNode('f');

    a2.left = c2;
    a2.right = b2;
    c2.right = f2;
    b2.left = e2;
    b2.right = d2;

    invertTree(a1);
    expect(a1).toEqual(a2);

    const g1 = new TreeNode('g');
    a1.left = b1;
    a1.right = c1;
    b1.left = d1;
    b1.right = e1;
    c1.left = f1;
    c1.right = g1;

    const g2 = new TreeNode('g');
    c2.left = g2;

    invertTree(a1);
    expect(a1).toEqual(a2);
  });

  test('Problem 84 Number of Islands', () => {
    const matrix = [
      [1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1]
    ];

    expect(numIslands(matrix)).toBe(4);

    const matrix1 = [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

    expect(numIslands(matrix1)).toBe(1);

    const matrix2 = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1]
    ];

    expect(numIslands(matrix2)).toBe(3);
  });

  test('Problem 85 One Or Zero', () => {
    expect(oneOrZero(3, 4, 0)).toBe(4);
    expect(oneOrZero(3, 4, 1)).toBe(3);
    expect(oneOrZero(4, 4, 1)).toBe(4);
    expect(oneOrZero(4, 4, 1)).toBe(4);
    expect(oneOrZero(0, 1, 0)).toBe(1);
    expect(oneOrZero(0, 1, 1)).toBe(0);
  });

  test('Problem 86 Minimum Parantheses To Remove', () => {
    expect(minParenToRemove('()())()')).toBe(1);
    expect(minParenToRemove(')(')).toBe(2);
    expect(minParenToRemove(')()')).toBe(1);
    expect(minParenToRemove(')((')).toBe(3);
    expect(minParenToRemove('())')).toBe(1);
    expect(minParenToRemove('()(')).toBe(1);
    expect(minParenToRemove('(((')).toBe(3);
    expect(minParenToRemove(')()(((')).toBe(4);
  });

  test('Problem 88 Division', () => {
    expect(division(5, 3)).toBe(1);
    expect(division(6, 3)).toBe(2);
    expect(division(17, 3)).toBe(5);
    expect(division(17, 2)).toBe(8);
    expect(division(3, 5)).toBe(0);
    expect(division(3, 1)).toBe(3);
    expect(division(1, 8)).toBe(1);
    expect(division(0, 4)).toBe(0);

    // one negative number
    expect(division(0, -4)).toBe(0);
    expect(division(-17, 2)).toBe(-8);
    expect(division(6, -3)).toBe(-2);

    // two negative number
    expect(division(-6, -3)).toBe(2);

    // divide by zero error
    expect(() => {
      division(division(5, 0));
    }).toThrow();
  });

  test('Problem 89 Validate Binary Search Tree', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(validateBST(root)).toBe(true);

    const root1 = new TreeNode(5);
    root1.left = new TreeNode(1);
    root1.right = new TreeNode(4);
    root1.right.left = new TreeNode(3);
    root1.right.right = new TreeNode(6);
    expect(validateBST(root1)).toBe(false);
  });
});
