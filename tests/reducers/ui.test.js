import reducer from '../../src/reducers/ui';
import {
    translationsFilteredByTag
} from '../../src/actions/ui';

/**
 * Syntax => reducer(state, action)
 */
describe('UI reducer', () => {

    it('Should return the initial ui', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual({translationsFilteredBy: null});
    });

    it('Should set the translationsFilteredBy tag value', () => {
        const state = reducer([], translationsFilteredByTag('Tag'));

        expect(state).toEqual({translationsFilteredBy: 'Tag'});
    });
})
