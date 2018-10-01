import translationsService from '../services/translations';

const uiTranslationsReducer = (translations = [], action) => {

    switch (action.type) {
        case 'TRANSLATIONS_HIDDEN':
            return onTranslationsHidden(translations, action);
        case 'ALL_TRANSLATIONS_REVEALED':
            return onAllTranslationsRevealed(translations, action);
        case 'TRANSLATION_REVEALED':
            return onTranslationRevealed(translations, action);
        case 'TRANSLATIONS_SHUFFLED':
            return onTranslationsShuffled(translations, action);
        case 'TRANSLATIONS_UNSHUFFLED':
            return onTranslationsUnshuffled(translations);
        default:
            return translations;
    }
}

const replaceTranslations = (oldTranslations, newTranslations) => {
    return [...oldTranslations].map(translation => {
        const newTranslation = newTranslations.find(newTranslation => {
            return newTranslation.id === translation.id;
        });

        if (typeof newTranslation !== 'undefined') {
           return newTranslation;
        } else {
            return translation;
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

const onAllTranslationsRevealed = (translations, action) => {
    const revealedTranslations = action.translations.map((translation) => {
        translation.hidden = false;

        return translation;
    });

    return replaceTranslations(translations, revealedTranslations);
}

const onTranslationsHidden = (translations, action) => {
    const hiddenTranslations = action.translations.map((translation) => {
        translation.hidden = action.side;

        return translation;
    });

    return replaceTranslations(translations, hiddenTranslations);
}

export default uiTranslationsReducer;
