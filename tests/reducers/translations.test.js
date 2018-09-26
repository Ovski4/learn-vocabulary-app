import reducer from '../../src/reducers/translations';
import {
    translationAdded,
    translationDeleted,
    translationUpdated,
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

    it('Should delete a translation', () => {
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

        const newState1 = reducer(initialState, translationDeleted('de-5fr'));
        expect(newState1.length).toEqual(1);

        const newState2 = reducer(initialState, translationDeleted('fake'));
        expect(newState2.length).toEqual(2);
    });

    it('Should update a translation', () => {
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

        const expectedState = [
            {
                word1: 'Test1',
                word2: 'Test2',
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

        const newState = reducer(initialState, translationUpdated({
            word1: 'Test1',
            word2: 'Test2',
            createdAt: 1537166675288,
            id: '2eab4'
        }));

        expect(newState).toEqual(expectedState);
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
