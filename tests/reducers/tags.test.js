import reducer from '../../src/reducers/tags';
import {
    tagAdded,
    tagDeleted,
    tagUpdated,
} from '../../src/actions/tags';

/**
 * Syntax => reducer(state, action)
 */
describe('Tags reducer', () => {

    it('Should return the initial tags', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual([]);
    });

    it('Should add a tag', () => {
        const newState = reducer([], tagAdded({
            label: 'Test',
            createdAt: 1,
            id: '1',
            translations: ['1', '2']
        }));

        expect(newState).toEqual([{
            label: 'Test',
            createdAt: 1,
            id: '1',
            translations: ['1', '2']
        }]);
    });

    it('Should delete a tag', () => {
        const initialState = [
            {
                label: 'Test',
                createdAt: 1,
                id: '1',
                translations: []
            }
        ];

        const newState1 = reducer(initialState, tagDeleted('fake'));
        expect(newState1.length).toEqual(1);

        const newState2 = reducer(initialState, tagDeleted('1'));
        expect(newState2).toEqual([]);
    });

    it('Should update a tag', () => {
        const initialState = [
            {
                label: 'Traduction',
                createdAt: 1537166675288,
                id: '2eab4',
                translations: []
            },
            {
                label: 'Douleur',
                createdAt: 1537166685284,
                id: 'de-5fr',
                translations: []
            }
        ];

        const expectedState = [
            {
                label: 'Test2',
                createdAt: 1537166675288,
                id: '2eab4',
                translations: ['2']
            },
            {
                label: 'Douleur',
                createdAt: 1537166685284,
                id: 'de-5fr',
                translations: []
            }
        ];

        const newState = reducer(initialState, tagUpdated({
            label: 'Test2',
            createdAt: 1537166675288,
            id: '2eab4',
            translations: ['2']
        }));

        expect(newState).toEqual(expectedState);
    });
})
