import translationsService from '../services/translations';

const translationsReducer =  (translations = [], action) => {
    switch (action.type) {
        case 'TRANSLATION_ADDED':
            return onTranslationAdded(translations, action);
        case 'TRANSLATION_DELETED':
            return onTranslationDeleted(translations, action);
        case 'TRANSLATION_UPDATED':
            return onTranslationUpdated(translations, action);
        case 'TRANSLATIONS_ENTIRELY_HIDDEN':
            return onTranslationsEntirelyHidden(translations, action);
        case 'ALL_TRANSLATIONS_REVEALED':
            return onAllTranslationsRevealed(translations);
        case 'TRANSLATION_REVEALED':
            return onTranslationRevealed(translations, action);
        case 'TRANSLATIONS_SHUFFLED':
            return onTranslationsShuffled(translations, action);
        case 'TRANSLATIONS_UNSHUFFLED':
            return onTranslationsUnshuffled(translations, action);
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

const onTranslationsShuffled = (translations, action) => {
    return translationsService.shuffle(
        [...translations],
        action.randomNumbers
    );
}

const onTranslationsUnshuffled = (translations) => {
    return translationsService.unshuffle([...translations]);
}

const onTranslationRevealed = (translations, action) => {
    return translations.map((translation) => {
        if (translation.id !== action.id) {
            return translation;
        } else {
            translation.hidden = false;

            return translation;
        }
    });
}

const onAllTranslationsRevealed = (translations) => {
    return translations.map((translation) => {
        translation.hidden = false;

        return translation;
    });
}

const onTranslationsEntirelyHidden = (translations, action) => {
    return translations.map((translation) => {
        translation.hidden = action.side;

        return translation;
    });
}

export default translationsReducer;
