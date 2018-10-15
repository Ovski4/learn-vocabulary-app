export const translationsFilteredByTag = (tagId) => ({
    type: 'TRANSLATIONS_FILTERED_BY_TAG',
    tagId
});

export const translationsSearched = (text, scope) => ({
    type: 'TRANSLATIONS_SEARCHED',
    text,
    scope
});
