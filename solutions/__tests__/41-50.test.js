import constructItinerary from '../41-50/Problem41';
import MaxStack from '../41-50/Problem43';

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
});
