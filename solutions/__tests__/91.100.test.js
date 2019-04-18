import TreeNode from '../Data-Structures/TreeNode';

import courseOrder from '../91-100/Problem92';
import { largestBST, sizeOfLargestBST } from '../91-100/Problem93';

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
});
