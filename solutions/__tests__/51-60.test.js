import LRUCache from '../51-60/Problem52';

describe('Problems 51 - 60', () => {
  test('Problem 52 LRU Cache', () => {
    const cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    expect(cache.get(1)).toBe(1);
    cache.set(3, 3);
    expect(cache.get(2)).toBeNull();
    cache.set(4, 4);
    expect(cache.get(1)).toBeNull();
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });
});
