import reducer from '../../src/reducers/tags';
import {
    tagsAdded,
    tagsUpdated,
    tagsDeleted,
} from '../../src/actions/tags';

/**
 * Syntax => reducer(state, action)
 */
describe('Tags reducer', () => {

    it('Should return the initial tags', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual([]);
    });

    it('Should add tags', () => {
        const state = reducer([], tagsAdded(
            [
                {
                    createdAt: 1,
                    id: '1',
                    label: 'new tag'
                },
                {
                    createdAt: 2,
                    id: '2',
                    label: 'yet another tag'
                }
            ],
            'new_translation_id'
        ));

        expect(state).toEqual([
            {
                createdAt: 1,
                id: '1',
                label: 'new tag',
                translations: ['new_translation_id']
            },
            {
                createdAt: 2,
                id: '2',
                label: 'yet another tag',
                translations: ['new_translation_id']
            }
        ]);
        
    });

    it('Should add translation id on tag', () => {
        const initialState = [
            {
                createdAt: 1,
                id: '1',
                label: 'not a new tag',
                translations: ['translation_id_x']
            }
        ]

        const newState = reducer(initialState, tagsAdded(
            [
                {
                    createdAt: 1,
                    id: '1',
                    label: 'not a new tag'
                },
                {
                    createdAt: 2,
                    id: '2',
                    label: 'new tag'
                }
            ],
            'new_translation_id'
        ));

        expect(newState).toEqual([
            {
                createdAt: 1,
                id: '1',
                label: 'not a new tag',
                translations: ['translation_id_x', 'new_translation_id']
            },
            {
                createdAt: 2,
                id: '2',
                label: 'new tag',
                translations: ['new_translation_id']
            }
        ]);
    });

    it('Should update (add and remove) tags', () => {
        const initialState = [
            {
                createdAt: 1,
                id: '1',
                label: 'first tag',
                translations: ['translation_id_1', 'translation_id_2']
            },
            {
                createdAt: 2,
                id: '2',
                label: 'second tag',
                translations: ['translation_id_1']
            },
            {
                createdAt: 3,
                id: '3',
                label: 'third tag',
                translations: ['translation_id_2']
            },
            {
                createdAt: 4,
                id: '4',
                label: 'fourth tag',
                translations: ['translation_id_2']
            }
        ]

        const newState = reducer(initialState, tagsUpdated(
            [
                {
                    createdAt: 1,
                    id: '1',
                    label: 'first tag'
                },
                {
                    createdAt: 3,
                    id: '3',
                    label: 'third tag'
                },
                {
                    createdAt: 5,
                    id: '5',
                    label: 'fifth tag'
                },
            ],
            'translation_id_1'
        ));

        expect(newState).toEqual([
            {
                createdAt: 1,
                id: '1',
                label: 'first tag',
                translations: ['translation_id_1', 'translation_id_2']
            },
            {
                createdAt: 3,
                id: '3',
                label: 'third tag',
                translations: ['translation_id_2', 'translation_id_1']
            },
            {
                createdAt: 4,
                id: '4',
                label: 'fourth tag',
                translations: ['translation_id_2']
            },
            {
                createdAt: 5,
                id: '5',
                label: 'fifth tag',
                translations: ['translation_id_1']
            }
        ]);

    });

    it('Should delete tags', () => {
        const initialState = [
            {
                createdAt: 1,
                id: '1',
                label: 'first tag',
                translations: ['translation_id_1', 'translation_id_2']
            },
            {
                createdAt: 2,
                id: '2',
                label: 'second tag',
                translations: ['translation_id_1']
            },
            {
                createdAt: 3,
                id: '3',
                label: 'third tag',
                translations: ['translation_id_2']
            },
            {
                createdAt: 4,
                id: '4',
                label: 'fourth tag',
                translations: ['translation_id_2']
            }
        ]

        const newState = reducer(initialState, tagsDeleted('translation_id_2'));

        expect(newState).toEqual([
            {
                createdAt: 1,
                id: '1',
                label: 'first tag',
                translations: ['translation_id_1']
            },
            {
                createdAt: 2,
                id: '2',
                label: 'second tag',
                translations: ['translation_id_1']
            }
        ]);
    });

})
