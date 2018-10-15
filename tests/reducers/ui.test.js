import reducer from '../../src/reducers/ui';
import {
    translationsFilteredByTag,
    translationsSearched
} from '../../src/actions/ui';

/**
 * Syntax => reducer(state, action)
 */
describe('UI reducer', () => {

    it('Should return the initial ui', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual({
            translationsFilteredBy: null,
            translationsSearch: {
                edition: '',
                revision: ''
            }
        });
    });

    it('Should set the translationsFilteredBy tag value', () => {
        const state = reducer(undefined, translationsFilteredByTag('Tag'));

        expect(state).toEqual({
            translationsFilteredBy: 'Tag',
            translationsSearch: {
                edition: '',
                revision: ''
            }
        });
    });

    it('Should set the search text for edition', () => {
        const state = reducer(undefined, translationsSearched('Tag', 'edition'));

        expect(state).toEqual({
            translationsFilteredBy: null,
            translationsSearch: {
                edition: 'Tag',
                revision: ''
            }
        });
    });
})
