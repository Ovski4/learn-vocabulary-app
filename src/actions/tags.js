export const tagsAdded = (tags, translationId) => ({
    type: 'TAGS_ADDED',
    tags,
    translationId
});

export const tagsUpdated = (tags, translationId) => ({
    type: 'TAGS_UPDATED',
    tags,
    translationId
});

export const tagsDeleted = (translationId) => ({
    type: 'TAGS_DELETED',
    translationId
});
