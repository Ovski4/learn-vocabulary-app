import { createReducer } from '../services/helpers';

const initialState = {
    translationsFilteredBy: null
}

const actionHandlers = {
    TRANSLATIONS_FILTERED_BY_TAG: (ui, action) => onTranslationsFilteredByTag(ui, action),
};

const onTranslationsFilteredByTag = (ui, action) => {
    return {
        translationsFilteredBy: action.tagId
    };
}

const uiReducer = createReducer(initialState, actionHandlers);

export default uiReducer;
