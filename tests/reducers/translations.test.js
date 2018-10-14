import reducer from '../../src/reducers/translations';
import {
    translationAdded,
    translationDeleted,
    translationUpdated,
} from '../../src/actions/translations';

/**
 * Syntax => reducer(state, action)
 */
describe('Translations reducer', () => {

    it('Should return the initial translations', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual([]);
    });

    it('Should add a translation', () => {
        const newState = reducer([], translationAdded({
            word1: 'Test',
            word2: 'Test',
            createdAt: 1,
            id: '1',
            tags: ['1', '2']
        }));

        expect(newState).toEqual([{
            word1: 'Test',
            word2: 'Test',
            createdAt: 1,
            id: '1',
            tags: ['1', '2']
        }]);
    });

    it('Should delete a translation', () => {
        const initialState = [
            {
                word1: 'Test',
                word2: 'Test',
                createdAt: 1,
                id: '1',
                tags: []
            }
        ];

        const newState1 = reducer(initialState, translationDeleted('fake'));
        expect(newState1.length).toEqual(1);

        const newState2 = reducer(initialState, translationDeleted('1'));
        expect(newState2).toEqual([]);
    });

    it('Should update a translation', () => {
        const initialState = [
            {
                word1: 'Translation',
                word2: 'Traduction',
                createdAt: 1537166675288,
                id: '2eab4',
                tags: ['1', '2']
            },
            {
                word1: 'Pain',
                word2: 'Douleur',
                createdAt: 1537166685284,
                id: 'de-5fr',
                tags: []
            }
        ];

        const expectedState = [
            {
                word1: 'Test1',
                word2: 'Test2',
                createdAt: 1537166675288,
                id: '2eab4',
                tags: ['2']
            },
            {
                word1: 'Pain',
                word2: 'Douleur',
                createdAt: 1537166685284,
                id: 'de-5fr',
                tags: []
            }
        ];

        const newState = reducer(initialState, translationUpdated({
            word1: 'Test1',
            word2: 'Test2',
            createdAt: 1537166675288,
            id: '2eab4',
            tags: ['2']
        }));

        expect(newState).toEqual(expectedState);
    });
})
