import reducer from '../../src/reducers/translations';
import { translationAdded } from '../../src/actions/translations';

/**
 * Syntax => reducer(state, action)
 */
describe('Translations reducer', () => {

  it('Should return the initial translations', () => {
    const initialTranslations = reducer(undefined, {});
    expect(initialTranslations).toEqual([]);
  });

  it('Should add a translation', () => {
    const initialState = [
        {
            word1: 'Translation',
            word2: 'Traduction',
            createdAt: 1537166675288,
            id: '2eab4'
        },
        {
            word1: 'Pain',
            word2: 'Douleur',
            createdAt: 1537166685284,
            id: 'de-5fr'
        }
    ];

    const newState = reducer(initialState, translationAdded({
        word1: 'Test',
        word2: 'Test',
        createdAt: 1537166675280,
        id: '2eab4-7'
    }));

    expect(newState.length).toEqual(3);
  });
})
