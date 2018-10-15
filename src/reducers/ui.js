import { createReducer } from '../services/helpers';

const initialState = {
    translationsFilteredBy: null,
    translationsSearch: ''
}

const actionHandlers = {
    TRANSLATIONS_FILTERED_BY_TAG: (ui, action) => onTranslationsFilteredByTag(ui, action),
    TRANSLATIONS_SEARCHED: (ui, action) => onTranslationsSearched(ui, action)
};

const onTranslationsFilteredByTag = (ui, action) => {
    return {
        translationsFilteredBy: action.tagId,
        translationsSearch: ui.translationsSearch
    };
}

const onTranslationsSearched = (ui, action) => {
    return {
        translationsFilteredBy: ui.translationsFilteredBy,
        translationsSearch: action.text
    };
}

const uiReducer = createReducer(initialState, actionHandlers);

export default uiReducer;
