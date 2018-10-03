import { createReducer } from '../services/helpers';
import translationsService from '../services/translations';

const actionHandlers = {
    TRANSLATIONS_HIDDEN: (translations, action) => onTranslationsHidden(translations, action),
    ALL_TRANSLATIONS_REVEALED: (translations, action) => onAllTranslationsRevealed(translations, action),
    TRANSLATION_REVEALED: (translations, action) => onTranslationRevealed(translations, action),
    TRANSLATIONS_SHUFFLED: (translations, action) => onTranslationsShuffled(translations, action),
    TRANSLATIONS_UNSHUFFLED: (translations, action) => onTranslationsUnshuffled(translations, action)
};

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

const uiTranslationsReducer = createReducer([], actionHandlers);

export default uiTranslationsReducer;
