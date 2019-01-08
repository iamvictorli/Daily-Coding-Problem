import TwoSum from '../Problem1';
import ProductExceptSelf from '../Problem2';
import { TreeNode, serialize, deserialize } from '../Problem3';

test('Problem 1 Two Sum', () => {
  expect(TwoSum([2, 7, 11, 15], 9)).toBe(true);
  expect(TwoSum([], 19)).toBe(false);
  expect(TwoSum([2, 11, 99, 15], 26)).toBe(true);
  expect(TwoSum([2, 11, 99, 16], 26)).toBe(false);
});

test('Problem 2 Product', () => {
  expect(ProductExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(ProductExceptSelf([3, 2, 1])).toEqual([2, 3, 6]);
  expect(ProductExceptSelf([1])).toEqual([1]);
  expect(ProductExceptSelf([])).toEqual([]);
});

test('Problem 3 Serialize And Deserialize Binary Tree', () => {
  expect(deserialize(serialize(null))).toBe(null);

  const node = new TreeNode(
    'root',
    new TreeNode('left', new TreeNode('left.left'), new TreeNode('right'))
  );

  expect(deserialize(serialize(node))).toEqual(node);
  expect(deserialize(serialize(node)).left.left.val).toEqual('left.left');
});
