import {
    inboundTranslationsTransform,
    outboundTranslationsTransform
} from '../../src/transformers/translations';

describe('Transformer', () => {

    const hydratedTranslations = [
        {
            word1: 'dummy',
            word2: 'dummy',
            createdAt: 1,
            id: '1',
            hidden: false,
            index: 0
        },
        {
            word1: 'dummy',
            word2: 'dummy',
            createdAt: 2,
            id: '2',
            hidden: false,
            index: 1
        }
    ];

    const presistedTranslations = [
        {
            word1: 'dummy',
            word2: 'dummy',
            createdAt: 1,
            id: '1'
        },
        {
            word1: 'dummy',
            word2: 'dummy',
            createdAt: 2,
            id: '2'
        }
    ];

    it('Should transform the state on its way to being serialized and persisted', () => {
        expect(
            inboundTranslationsTransform(hydratedTranslations)
        ).toEqual(
            presistedTranslations
        );
    });

    it('Should transform the state being rehydrated', () => {
        expect(
            outboundTranslationsTransform(presistedTranslations)
        ).toEqual(
            hydratedTranslations
        );
    });
});
