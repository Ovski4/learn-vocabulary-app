import migrations from '../src/migrations';

describe('Migrations', () => {

    it('Should migrate from version -1 to 0', () => {
        const initialState = {
            translations: [
                {
                    word1: 'Translation',
                    word2: 'Traduction',
                    createdAt: 1537166675288
                },
                {
                    word1: 'Pain',
                    word2: 'Douleur',
                    createdAt: 1537166685284
                }
            ]
        };

        const migratedState = migrations[0](initialState);

        expect(initialState).toEqual(migratedState);
    });

    it('Should migrate from version 0 to 1', () => {
        const initialState = {
            translations: [
                {
                    word1: 'Translation',
                    word2: 'Traduction',
                    createdAt: 1537166675288
                },
                {
                    word1: 'Pain',
                    word2: 'Douleur',
                    createdAt: 1537166685284
                }
            ]
        };

        const migratedState = migrations[1](initialState);
        for (let i = 0; i < initialState.translations.length; i++) {
            // Check immutability
            expect(initialState.translations[i]).not.toHaveProperty('id');

            // Check new property
            expect(migratedState.translations[i]).toHaveProperty('id');
            expect(migratedState.translations[i].id.length).toEqual(36);
        }
    });

    it('Should migrate from version 1 to 2', () => {
        const initialState = {
            translations: [
                {
                    word1: 'Translation',
                    word2: 'Traduction',
                    createdAt: 1537166675288,
                    id: '1'
                },
                {
                    word1: 'Pain',
                    word2: 'Douleur',
                    createdAt: 1537166685284,
                    id: '2'
                }
            ]
        };

        const migratedState = migrations[2](initialState);
        for (let i = 0; i < initialState.translations.length; i++) {
            // Check immutability
            expect(initialState.translations[i]).not.toHaveProperty('tags');

            // Check new property
            expect(migratedState.translations[i]).toHaveProperty('tags');
            expect(migratedState.translations[i].tags.length).toEqual(0);
        }
    });
});
