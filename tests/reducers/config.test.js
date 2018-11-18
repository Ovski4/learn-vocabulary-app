import reducer from '../../src/reducers/config';
import {
    localeUpdated
} from '../../src/actions/config';

/**
 * Syntax => reducer(state, action)
 */
describe('UI reducer', () => {

    it('Should return the initial ui', () => {
        const initialState = reducer(undefined, {});
        expect(initialState).toEqual({
            locale: 'en'
        });
    });

    it('Should update the locale value', () => {
        const state = reducer(undefined, localeUpdated('de'));

        expect(state).toEqual({
            locale: 'de'
        });
    });

})
