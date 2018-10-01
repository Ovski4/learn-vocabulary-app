const initialState = {
    translationsFilteredBy: null
}

const uiReducer =  (ui = initialState, action) => {

    switch (action.type) {
        case 'TRANSLATIONS_FILTERED_BY_TAG':
            return onTranslationsFilteredByTag(ui, action);
        default:
            return ui;
    }
}

const onTranslationsFilteredByTag = (ui, action) => {
    return {
        translationsFilteredBy: action.tagId
    };
}

export default uiReducer;
