import translationsService from '../services/translations';

const uiTranslationsReducer = (translations = [], action) => {

    switch (action.type) {
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

export default uiTranslationsReducer;
