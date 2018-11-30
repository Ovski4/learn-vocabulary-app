import uuidv4 from 'uuid/v4';

export default {

    /**
     * Initial state
     */
    0: (state) => {
        return {
            ...state
        }
    },

    /**
     * Add uuid
     */
    1: (state) => {
        const newState = {...state};
        const translations = newState.translations.map((translation) => {
            return {
                ...translation,
                id: uuidv4()
            }
        })

        return { translations };
    },

    /**
     * Add tags
     */
    2: (state) => {
        const newState = {...state};
        const translations = newState.translations.map((translation) => {
            return {
                ...translation,
                tags: []
            }
        });

        return { translations };
    },

    /**
     * Remove translations on tags
     */
    3: (state) => {
        const newState = {...state};
        const tags = newState.tags.map((tag) => {
            const { translations, ...tagsWithoutTranslations } = tag;

            return tagsWithoutTranslations;
        });

        return Object.assign(newState, {tags});
    },

    /**
     * Add config with default locale
     */
    4: (state) => {
        return Object.assign({...state}, {
            config: {
                locale: 'en'
            }
        });
    },

    /**
     * Add tag feature to true
     */
    5: (state) => {
        const newState = {...state};

        newState.config = Object.assign(
            {...newState.config},
            {
                tagsFeature: true
            }
        );

        return newState;
    }
};
