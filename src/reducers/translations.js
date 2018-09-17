import translationsService from '../services/translations';

const translationsReducer =  (translations = null, action) => {

    // Prevent any action before initialization
    if (translations === null && action.type !== 'TRANSLATIONS_INITIALIZED') {
        return null;
    }

    switch (action.type) {
        case 'TRANSLATIONS_INITIALIZED':
            return onTranslationsInitialized(translations, action);
        case 'TRANSLATION_ADDED':
            return onTranslationAdded(translations, action);
        case 'TRANSLATION_DELETED':
            return onTranslationDeleted(translations, action);
        case 'TRANSLATION_UPDATED':
            return onTranslationUpdated(translations, action);
        case 'TRANSLATIONS_SHUFFLED':
            return onTranslationsShuffled(translations, action);
        case 'TRANSLATIONS_UNSHUFFLED':
            return onTranslationsUnshuffled(translations, action);
        default:
            return translations;
    }
}

const onTranslationsInitialized = (translations, action) => {
    return action.translations;
}

const onTranslationsShuffled = (translations, action) => {
    return translationsService.shuffle(translations, action.randomNumbers);
}

const onTranslationsUnshuffled = (translations) => {
    return translationsService.unshuffle(translations);
}

const onTranslationAdded = (translations, action) => {
    return [
        ...translations,
        action.translation
    ];
}

const onTranslationDeleted = (translations, action) => {
    return translations.filter(
        (element) => element.createdAt !== action.createdAt
    );
}

const onTranslationUpdated = (translations, action) => {
    return translations.map((translation) => {
        if (translation.createdAt !== action.translation.createdAt) {
            return translation;
        } else {
            return {
                ...translation,
                ...action.translation
            };
        }
    });
}

export default translationsReducer;
