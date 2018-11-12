import { createReducer } from '../services/helpers';

const initialState = {
    locale: 'en'
}

const actionHandlers = {
    LOCALE_UPDATED: (config, action) => onLocaleUpdated(config, action),
};

const onLocaleUpdated = (config, action) => {
    return {
        locale: action.locale
    };
}

const configReducer = createReducer(initialState, actionHandlers);

export default configReducer;
