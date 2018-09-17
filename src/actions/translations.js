import storageService from '../services/storage';

export const translationsInitialized = translations => ({
    type: 'TRANSLATIONS_INITIALIZED',
    translations
});

export const translationDeleted = createdAt => ({
    type: 'TRANSLATION_DELETED',
    createdAt
});

export const translationAdded = translation => ({
    type: 'TRANSLATION_ADDED',
    translation
});

export const translationUpdated = translation => ({
    type: 'TRANSLATION_UPDATED',
    translation
});

export const translationsShuffled = randomNumbers => ({
    type: 'TRANSLATIONS_SHUFFLED',
    randomNumbers
});

export const translationsUnshuffled = () => ({
    type: 'TRANSLATIONS_UNSHUFFLED'
});

export const fetchTranslations = () => {
    return (dispatch) => {
        storageService
            .get('translations')
            .then((translations) => {
                if (translations !== null) {
                    dispatch(translationsInitialized(translations));
                } else {
                    dispatch(translationsInitialized([]));
                }
            });
    };
};