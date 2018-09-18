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
            translation.id = uuidv4();

            return translation;
        })

        return { translations }
    }
};
