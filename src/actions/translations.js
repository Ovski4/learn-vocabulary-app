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
