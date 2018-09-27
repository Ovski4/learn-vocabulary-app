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
    }
};
