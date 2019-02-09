import constructItinerary from '../41-50/Problem41';

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
});
