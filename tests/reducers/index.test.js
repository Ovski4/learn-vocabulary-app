import reducer from '../../src/reducers/index';

/**
 * Syntax => reducer(state, action)
 */
describe('Translations reducer', () => {

  it('Should return the initial translations', () => {
    const initialTranslations = reducer(undefined, {}).translations;
    expect(initialTranslations).toEqual([]);
  });

  // https://redux.js.org/recipes/writingtests#reducers

  it('Should set allTranslationsRevealed to true', () => {
    const initialState = {
        translations: [
            {
                word1: 'Translation',
                word2: 'Traduction',
                createdAt: 1537166675288
            },
            {
                word1: 'Pain',
                word2: 'Douleur',
                createdAt: 1537166685284
            },
        ],
        ui: {
            allTranslationsRevealed: true,
            leftTranslationsEntirelyHidden: false,
            mode: 'edition',
            rightTranslationsEntirelyHidden: false,
            shuffled: false
        }
    };
  });

})
