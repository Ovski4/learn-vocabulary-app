export const translationEditable = createdAt => ({
    type: 'TRANSLATION_EDITABLE',
    createdAt
});

export const modeChanged = mode => ({
    type: 'MODE_CHANGED',
    mode
});

export const translationRevealed = (createdAt, side) => ({
    type: 'TRANSLATION_REVEALED',
    createdAt,
    side
});

export const allTranslationsRevealed = () => ({
    type: 'ALL_TRANSLATIONS_REVEALED'
});

export const translationsEntirelyHidden = side => ({
    type: 'TRANSLATIONS_ENTIRELY_HIDDEN',
    side
});
