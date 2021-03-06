import translationsService from '../../src/services/translations';

describe('Translations service', () => {

    it('Should shuffle translations', () => {
        const randomNumbers = [0.25, 0.72, 0.46, 0.98, 0.09];
        const array = [
            { createdAt: 1 }, 
            { createdAt: 2 }, 
            { createdAt: 3 }, 
            { createdAt: 4 }, 
            { createdAt: 5 }
        ];
        const expectedArray = [
            { createdAt: 5 }, 
            { createdAt: 3 }, 
            { createdAt: 2 }, 
            { createdAt: 4 }, 
            { createdAt: 1 }
        ];
        const shuffledArray = translationsService.shuffle(array, randomNumbers);

        expect(shuffledArray).toEqual(expectedArray);
    });

    it('Should unshuffle translations', () => {
        const array = [
            { createdAt: 5 }, 
            { createdAt: 3 }, 
            { createdAt: 2 }, 
            { createdAt: 4 }, 
            { createdAt: 1 }
        ];
        const expectedArray = [
            { createdAt: 1 }, 
            { createdAt: 2 }, 
            { createdAt: 3 }, 
            { createdAt: 4 }, 
            { createdAt: 5 }
        ];
        const unshuffledArray = translationsService.unshuffle(array);

        expect(unshuffledArray).toEqual(expectedArray);
    });

    it('Should filter by tag id', () => {
        const array = [
            { id: '1', tags:['1'] },
            { id: '2', tags:['2'] },
            { id: '3', tags:['1'] },
            { id: '4', tags:[] },
            { id: '5', tags:[] },
        ];
        const expectedArray = [
            { id: '1', tags:['1'] },
            { id: '3', tags:['1'] },
        ];
        const filteredArray = translationsService.filterByTagId(array, '1');

        expect(filteredArray).toEqual(expectedArray);
    });

    it('Should seach some translations', () => {
        const array = [
            { id: '1', word1: 'Hello', word2: 'Bonjour' },
            { id: '2', word1: 'Red', word2: 'Rouge' },
            { id: '3', word1: 'Loop', word2: 'Boucle' },
            { id: '4', word1: 'Blue', word2: 'Bleu' },
            { id: '5', word1: 'Jerk', word2: 'Salop' },
        ];
        const expectedArray = [
            { id: '1', word1: 'Hello', word2: 'Bonjour' },
            { id: '3', word1: 'Loop', word2: 'Boucle' },
            { id: '5', word1: 'Jerk', word2: 'Salop' },
        ];
        const filteredArray = translationsService.filterBySearch(array, 'lo');

        expect(filteredArray).toEqual(expectedArray);
    });

    it('Should check whether or not the translations are ordered', () => {
        const array1 = [
            { createdAt: 1 }, 
            { createdAt: 2 }, 
            { createdAt: 3 }, 
            { createdAt: 4 }, 
            { createdAt: 5 }
        ];
        expect(
            translationsService.translationsAreOrdered(array1)
        ).toEqual(
            true
        );

        const array2 = [
            { createdAt: 1 }, 
            { createdAt: 2 }, 
            { createdAt: 3 }, 
            { createdAt: 5 }, 
            { createdAt: 4 }
        ];
        expect(
            translationsService.translationsAreOrdered(array2)
        ).toEqual(
            false
        );
    });

    it('Should check whether or not the translations are hidden', () => {
        const array1 = [
            { hidden: 'right' }, 
            { hidden: false }, 
            { hidden: 'right' }, 
            { hidden: false }, 
            { hidden: false }
        ];
        expect(
            translationsService.translationsAreHidden(array1, 'right')
        ).toEqual(
            false
        );

        const array2 = [
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }
        ];
        expect(
            translationsService.translationsAreHidden(array2, 'left')
        ).toEqual(
            false
        );

        const array3 = [
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }, 
            { hidden: 'right' }
        ];
        expect(
            translationsService.translationsAreHidden(array3, 'right')
        ).toEqual(
            true
        );
    });

    it('Should check whether or not the translations are all visible', () => {
        const array1 = [
            { hidden: 'right' }, 
            { hidden: false }, 
            { hidden: 'right' }, 
            { hidden: false }, 
            { hidden: false }
        ];
        expect(
            translationsService.allTranslationsAreVisible(array1)
        ).toEqual(
            false
        );

        const array2 = [
            { hidden: false }, 
            { hidden: false }, 
            { hidden: false }, 
            { hidden: false }, 
            { hidden: false }
        ];
        expect(
            translationsService.allTranslationsAreVisible(array2)
        ).toEqual(
            true
        );
    });
});
