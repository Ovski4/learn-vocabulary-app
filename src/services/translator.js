import en from '../i18n/en';
import fr from '../i18n/fr';

const translationsLocalesMap = {
    en: en,
    fr: fr
};

const locales = [
    { id: 'en', label: 'English' },
    { id: 'fr', label: 'Français' }
];

const resolve = (keys, translations) => {
    const key = keys.shift();

    if (keys.length > 0 && translations != undefined && translations[key] != null) {
        return resolve(keys, translations[key]);
    }

    return translations[key] || null;
}

const getLocales = () => {
    return locales;
}

const get = (path, locale = 'en') => {

    if (!translationsLocalesMap[locale]) {
        throw new Error(`Could not find translations for locale '${locale}'`);
    }

    if (!path) {
        throw new Error(`Path must be defined`);
    }

    const value = resolve(path.split('.'), translationsLocalesMap[locale]);

    if (value == null) {
        throw new Error(`Could not find a translation value for path '${path}'`);
    }

    return value;
}

export default {
    get,
    getLocales
};
