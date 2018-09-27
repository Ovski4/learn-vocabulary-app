import reducer from '../../src/reducers/uiTranslations';
import {
    translationsShuffled,
    translationsUnshuffled,
    translationsEntirelyHidden,
    translationRevealed,
    allTranslationsRevealed
} from '../../src/actions/translations';

/**
 * Syntax => reducer(state, action)
 */
describe('Translations reducer', () => {

    it('Should return the initial translations', () => {
        const initialTranslations = reducer(undefined, {});
        expect(initialTranslations).toEqual([]);
    });

    it('Should reveal all the translations', () => {
        const initialState = [
            { hidden: false },
            { hidden: 'left' },
            { hidden: 'right' },
        ];
        const expectedState = [
            { hidden: false },
            { hidden: false },
            { hidden: false },
        ];
        const newState = reducer(initialState, allTranslationsRevealed());

        expect(newState).toEqual(expectedState);
    });

    it('Should reveal one translation', () => {
        const initialState = [
            { hidden: false, id: '1' },
            { hidden: 'right', id: '2' },
            { hidden: 'right', id: '3' },
        ];
        const expectedState = [
            { hidden: false, id: '1' },
            { hidden: 'right', id: '2' },
            { hidden: false, id: '3' },
        ];
        const newState = reducer(initialState, translationRevealed('3'));

        expect(newState).toEqual(expectedState);
    });

    it('Should hide all translations on the left', () => {
        const initialState = [
            { hidden: false, id: '1' },
            { hidden: 'right', id: '2' },
            { hidden: 'right', id: '3' },
        ];
        const expectedState = [
            { hidden: 'left', id: '1' },
            { hidden: 'left', id: '2' },
            { hidden: 'left', id: '3' },
        ];
        const newState = reducer(initialState, translationsEntirelyHidden('left'));

        expect(newState).toEqual(expectedState);
    });

    it('Should shuffle the translations', () => {
        const randomNumbers = [0.25, 0.72, 0.46, 0.98, 0.09];
        const initialState = [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
        ];
        const expectedState = [
            { id: '5' },
            { id: '3' },
            { id: '2' },
            { id: '4' },
            { id: '1' },
        ];
        const newState = reducer(initialState, translationsShuffled(randomNumbers));

        expect(newState).toEqual(expectedState);
    });

    it('Should unshuffle the translations', () => {
        const initialState = [
            { createdAt: 4 }, 
            { createdAt: 3 }, 
            { createdAt: 2 }, 
            { createdAt: 5 }, 
            { createdAt: 1 }
        ];
        const expectedState = [
            { createdAt: 1 }, 
            { createdAt: 2 }, 
            { createdAt: 3 }, 
            { createdAt: 4 }, 
            { createdAt: 5 }
        ];
        const newState = reducer(initialState, translationsUnshuffled());

        expect(newState).toEqual(expectedState);
    });
})
