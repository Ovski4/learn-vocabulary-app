import reducer from '../../src/reducers/config';
import {
    localeUpdated,
    disableTagsFeature
} from '../../src/actions/config';

/**
 * Syntax => reducer(state, action)
 */
describe('UI reducer', () => {

    it('Should return the initial ui', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual({
            locale: 'en',
            tagsFeature: true
        });
    });

    it('Should update the locale value', () => {
        const state = reducer(undefined, localeUpdated('de'));

        expect(state).toEqual({
            locale: 'de',
            tagsFeature: true
        });
    });

    it('Should update the tagsFeature value', () => {
        const state = reducer(undefined, disableTagsFeature(true));

        expect(state).toEqual({
            locale: 'en',
            tagsFeature: false
        });
    });

})
