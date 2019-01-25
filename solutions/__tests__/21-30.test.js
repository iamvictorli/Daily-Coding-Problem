import isEqual from 'lodash.isequal';
import minRooms from '../21-30/Problem21';
import wordBreak from '../21-30/Problem22';

describe('Problems 21 - 30', () => {
  test('Problem 21 Minimum Rooms Required', () => {
    expect(minRooms([[30, 75], [0, 50], [60, 150]])).toBe(2);
    expect(minRooms([[0, 30], [5, 10], [15, 20]])).toBe(2);
    expect(minRooms([[0, 30], [30, 40], [15, 20]])).toBe(2);
    expect(minRooms([[0, 50], [0, 10], [0, 20]])).toBe(3);
    expect(minRooms([[0, 30], [30, 40], [40, 50]])).toBe(1);
    expect(minRooms([])).toBe(0);
  });

  test('Problem 22 Build String', () => {
    expect(
      wordBreak('thequickbrownfox', ['the', 'quick', 'brown', 'fox'])
    ).toEqual(['the', 'quick', 'brown', 'fox']);

    expect(
      wordBreak('thequickbrownfoxx', ['the', 'quick', 'brown', 'fox'])
    ).toBeNull();

    expect(
      isEqual(
        wordBreak('bedbathandbeyond', [
          'bed',
          'bath',
          'bedbath',
          'and',
          'beyond'
        ]),
        ['bed', 'bath', 'and', 'beyond']
      ) ||
        isEqual(
          wordBreak('bedbathandbeyond', [
            'bed',
            'bath',
            'bedbath',
            'and',
            'beyond'
          ]),
          ['bedbath', 'and', 'beyond']
        )
    ).toBe(true);
  });
});
