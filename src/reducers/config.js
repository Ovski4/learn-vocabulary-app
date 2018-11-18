import { createReducer } from '../services/helpers';

const initialState = {
    locale: 'en',
    tagsFeature: true
}

const actionHandlers = {
    LOCALE_UPDATED: (config, action) => onLocaleUpdated(config, action),
    TAGS_FEATURE_DISABLED: (config, action) => onDisableTagsFeature(config, action),
};

const onLocaleUpdated = (config, action) => {
    return {
        locale: action.locale,
        tagsFeature: config.tagsFeature
    };
}

const onDisableTagsFeature = (config, action) => {
    return {
        locale: config.locale,
        tagsFeature: !action.disabled
    };
}

const configReducer = createReducer(initialState, actionHandlers);

export default configReducer;
