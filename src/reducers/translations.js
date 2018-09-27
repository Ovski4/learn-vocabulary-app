const translationsReducer =  (translations = [], action) => {

    switch (action.type) {
        case 'TRANSLATION_ADDED':
            return onTranslationAdded(translations, action);
        case 'TRANSLATION_DELETED':
            return onTranslationDeleted(translations, action);
        case 'TRANSLATION_UPDATED':
            return onTranslationUpdated(translations, action);
        default:
            return translations;
    }
}

const onTranslationAdded = (translations, action) => {
    return [
        ...translations,
        action.translation
    ];
}

const onTranslationDeleted = (translations, action) => {
    return translations.filter(
        (element) => element.id !== action.id
    );
}

const onTranslationUpdated = (translations, action) => {
    return translations.map((translation) => {
        if (translation.id !== action.translation.id) {
            return translation;
        } else {
            return {
                ...translation,
                ...action.translation
            };
        }
    });
}

export default translationsReducer;
