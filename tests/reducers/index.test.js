import { tagDeleted } from '../../src/actions/tags';
import reducer from '../../src/reducers/index';


/**
 * Syntax => reducer(state, action)
 */
describe('Root reducer', () => {

    it('Should return the initial state', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual({
            translations: [],
            tags: [],
            ui: {
                translationsFilteredBy: null,
                translationsSearch: {
                    edition: '',
                    revision: '',
                }
            }
        });
    });

    it('Should delete a tag and update associated translations', () => {
        const initialState = {
            translations: [
                {
                    id: '1',
                    tags: ['1', '2', '3']
                },
                {
                    id: '2',
                    tags: ['4', '5', '1']
                },
                {
                    id: '3',
                    tags: ['4', '2', '3']
                }
            ],
            tags: [
                {
                    id: '1',
                    translations: ['1', '2']
                },
                {
                    id: '2',
                    translations: ['1', '3']
                },
                {
                    id: '3',
                    translations: ['1', '3']
                },
                {
                    id: '4',
                    translations: ['3', '2']
                },
                {
                    id: '5',
                    translations: ['2']
                }
            ],
            ui: {
                translationsFilteredBy: null,
                translationsSearch: {
                    edition: '',
                    revision: ''
                }
            }
        };
        
        const newState = reducer(initialState, tagDeleted('2'));

        expect(newState).toEqual({
            translations: [
                {
                    id: '1',
                    tags: ['1', '3']
                },
                {
                    id: '2',
                    tags: ['4', '5', '1']
                },
                {
                    id: '3',
                    tags: ['4', '3']
                }
            ],
            tags: [
                {
                    id: '1',
                    translations: ['1', '2']
                },
                {
                    id: '3',
                    translations: ['1', '3']
                },
                {
                    id: '4',
                    translations: ['3', '2']
                },
                {
                    id: '5',
                    translations: ['2']
                }
            ],
            ui: {
                translationsFilteredBy: null,
                translationsSearch: {
                    edition: '',
                    revision: ''
                }
            }
        });
    });

});