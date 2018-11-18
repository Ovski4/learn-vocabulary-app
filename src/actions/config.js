export const localeUpdated = locale => ({
    type: 'LOCALE_UPDATED',
    locale
});

export const disableTagsFeature = disabled => ({
    type: 'TAGS_FEATURE_DISABLED',
    disabled
});
