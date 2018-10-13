import { createReducer } from '../services/helpers';

const actionHandlers = {
    TRANSLATION_ADDED: (translations, action) => onTranslationAdded(translations, action),
    TRANSLATION_UPDATED: (translations, action) => onTranslationUpdated(translations, action),
    TRANSLATION_DELETED: (translations, action) => onTranslationDeleted(translations, action),
    TAG_DELETED: (translations, action) => onTagDeleted(translations, action)
};

const onTagDeleted = (translations, action) => {
    return translations.map((translation) => {
        return Object.assign(translation, {
            tags: translation.tags.filter(tag => tag !== action.id)
        })
    });
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

const translationsReducer = createReducer([], actionHandlers);

export default translationsReducer;
