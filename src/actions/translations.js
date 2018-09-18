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
