import TreeNode from '../Data-Structures/TreeNode';

import courseOrder from '../91-100/Problem92';
import { largestBST, sizeOfLargestBST } from '../91-100/Problem93';
import maxPathSum from '../91-100/Problem94';
import nextPermutation from '../91-100/Problem95';

describe('Problems 91 - 100', () => {
  test('Problem 92 Course Ordering', () => {
    const kv = [
      ['CSC300', new Set(['CSC100', 'CSC200'])],
      ['CSC200', new Set(['CSC100'])],
      ['CSC100', new Set()]
    ];

    const map = new Map(kv);
    expect(courseOrder(map)).toEqual(['CSC100', 'CSC200', 'CSC300']);
  });

  test('Problem 93 Largest BST Subtree', () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(8);
    root.right.right = new TreeNode(7);

    expect(largestBST(root)).toEqual(root.left);
    expect(sizeOfLargestBST(root)).toBe(3);

    const root1 = new TreeNode(5);
    root1.left = new TreeNode(2);
    root1.right = new TreeNode(4);
    root1.left.left = new TreeNode(1);
    root1.left.right = new TreeNode(3);
    expect(largestBST(root1)).toEqual(root1.left);
    expect(sizeOfLargestBST(root1)).toBe(3);

    const root2 = new TreeNode(50);
    root2.left = new TreeNode(30);
    root2.right = new TreeNode(60);
    root2.left.left = new TreeNode(5);
    root2.left.right = new TreeNode(20);
    root2.right.left = new TreeNode(45);
    root2.right.right = new TreeNode(70);
    root2.right.right.left = new TreeNode(65);
    root2.right.right.right = new TreeNode(80);
    expect(largestBST(root2)).toEqual(root2.right);
    expect(sizeOfLargestBST(root2)).toBe(5);
  });

  test('Problem 94 Binary Tree Maximum Path Sum', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(maxPathSum(root)).toBe(6);

    const root1 = new TreeNode(-10);
    root1.left = new TreeNode(9);
    root1.right = new TreeNode(20);
    root1.right.left = new TreeNode(15);
    root1.right.right = new TreeNode(7);
    expect(maxPathSum(root1)).toBe(42);

    const root2 = new TreeNode(1);
    root2.left = new TreeNode(2);
    root2.right = new TreeNode(3);
    root2.left.left = new TreeNode(4);
    root2.left.right = new TreeNode(5);
    root2.right.left = new TreeNode(6);
    root2.right.right = new TreeNode(7);
    expect(maxPathSum(root2)).toBe(18);

    const root3 = new TreeNode(10);
    root3.left = new TreeNode(2);
    root3.right = new TreeNode(10);
    root3.left.left = new TreeNode(20);
    root3.left.right = new TreeNode(1);
    root3.right.right = new TreeNode(-25);
    root3.right.right.left = new TreeNode(3);
    root3.right.right.right = new TreeNode(4);
    expect(maxPathSum(root3)).toBe(42);

    const root4 = new TreeNode(-3);
    expect(maxPathSum(root4)).toBe(-3);

    root4.left = new TreeNode(-5);
    root4.right = new TreeNode(-6);
    expect(maxPathSum(root4)).toBe(-3);

    root4.left.left = new TreeNode(3);
    expect(maxPathSum(root4)).toBe(3);
  });

  test('Problem 95 Next Permutation', () => {
    expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
    expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
    expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
    expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
    expect(nextPermutation([6, 2, 1, 5, 4, 3, 0])).toEqual([
      6,
      2,
      3,
      0,
      1,
      4,
      5
    ]);
    expect(nextPermutation([2, 3, 6, 5, 4, 1])).toEqual([2, 4, 1, 3, 5, 6]);
  });
});
