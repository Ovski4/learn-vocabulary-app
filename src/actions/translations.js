export const translationDeleted = id => ({
    type: 'TRANSLATION_DELETED',
    id
});

export const translationAdded = translation => ({
    type: 'TRANSLATION_ADDED',
    translation
});

export const translationUpdated = translation => ({
    type: 'TRANSLATION_UPDATED',
    translation
});

export const translationsEntirelyHidden = side => ({
    type: 'TRANSLATIONS_ENTIRELY_HIDDEN',
    side
});

export const allTranslationsRevealed = () => ({
    type: 'ALL_TRANSLATIONS_REVEALED'
});

export const translationRevealed = (id) => ({
    type: 'TRANSLATION_REVEALED',
    id
});

export const translationsShuffled = randomNumbers => ({
    type: 'TRANSLATIONS_SHUFFLED',
    randomNumbers
});

export const translationsUnshuffled = () => ({
    type: 'TRANSLATIONS_UNSHUFFLED'
});
