const shuffle = (translations, randomNumbers) => {
    let array = [...translations];
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(randomNumbers[counter-1] * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};

const unshuffle = (translations) => {
    return [...translations].sort(function(a, b) {
        return a.createdAt - b.createdAt;
    });
};

const filterByTagId = (translations, tagId) => {
    return translations.filter((translation) => {
        return translation.tags.includes(tagId);
    });
}

const filterBySearch = (translations, text) => {
    return translations.filter((translation) => {
        const search = text.toLowerCase();
        const word1 = translation.word1.toLowerCase();
        const word2 = translation.word2.toLowerCase();

        return word1.includes(search) || word2.includes(search);
    });
}

const translationsAreOrdered = (translations) => {
    let timestamp = -1;
    for (let i = 0; i < translations.length; i++) {
        if (timestamp > translations[i].createdAt) {
            return false;
        }

        timestamp = translations[i].createdAt;
    }

    return true;
};

const translationsAreHidden = (translations, side) => {
    for (let i = 0; i < translations.length; i++) {
        if (translations[i].hidden !== side) {
            return false;
        }
    }

    return true;
};

const allTranslationsAreVisible = (translations) => {
    for (let i = 0; i < translations.length; i++) {
        if (translations[i].hidden !== false) {
            return false;
        }
    }

    return true;
}

export default {
    unshuffle,
    shuffle,
    filterByTagId,
    filterBySearch,
    translationsAreOrdered,
    translationsAreHidden,
    allTranslationsAreVisible
}