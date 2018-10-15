export const translationsFilteredByTag = (tagId) => ({
    type: 'TRANSLATIONS_FILTERED_BY_TAG',
    tagId
});

export const translationsSearched = (text) => ({
    type: 'TRANSLATIONS_SEARCHED',
    text
});
