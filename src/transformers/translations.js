import translationsService from '../services/translations';

/**
* Transform state on its way to being serialized and persisted.
* Add view related things
*/
const inboundTranslationsTransform = (inboundTranslations) => {
    const transformedTranslations = [...inboundTranslations].map((translation) => {
        return {
            word1: translation.word1,
            word2: translation.word2,
            createdAt: translation.createdAt,
            id: translation.id,
            tags: translation.tags
        }
    });

    return translationsService.unshuffle(transformedTranslations);
}

/**
* Transform state being rehydrated
* Get rid of everything which is related to the view
*/
const outboundTranslationsTransform = (outboundTranslations) => {
    const transformedTranslations = [...outboundTranslations].map((translation, index) => {
        translation.hidden = false;
        translation.index = index;

        return translation;
    });

    return transformedTranslations;
}

export {
    inboundTranslationsTransform,
    outboundTranslationsTransform
}
