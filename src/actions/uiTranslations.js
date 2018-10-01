export const translationsHidden = (translations, side) => ({
    type: 'TRANSLATIONS_HIDDEN',
    translations,
    side
});

export const allTranslationsRevealed = (translations) => ({
    type: 'ALL_TRANSLATIONS_REVEALED',
    translations
});

export const translationRevealed = (id) => ({
    type: 'TRANSLATION_REVEALED',
    id
});

export const translationsShuffled = (randomNumbers) => ({
    type: 'TRANSLATIONS_SHUFFLED',
    randomNumbers
});

export const translationsUnshuffled = () => ({
    type: 'TRANSLATIONS_UNSHUFFLED'
});
