import getWordsWithPrefix from '../11-20/Problem11';

describe('Problems 11 - 20', () => {
  test('Problem 11 Get all words with prefix', () => {
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.arrayContaining(['deer', 'deal'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toEqual(
      expect.not.arrayContaining(['dog'])
    );
    expect(getWordsWithPrefix('de', ['dog', 'deer', 'deal'])).toHaveLength(2);

    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['cat'])
    );
    expect(
      getWordsWithPrefix('d', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(3);

    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.arrayContaining(['cat'])
    );
    expect(getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal'])
    );
    expect(
      getWordsWithPrefix('cat', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(1);

    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual([]);
    expect(getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('f', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);

    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      []
    );
    expect(getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])).toEqual(
      expect.not.arrayContaining(['dog', 'deer', 'deal', 'cat'])
    );
    expect(
      getWordsWithPrefix('fr', ['dog', 'deer', 'deal', 'cat'])
    ).toHaveLength(0);
  });
});
