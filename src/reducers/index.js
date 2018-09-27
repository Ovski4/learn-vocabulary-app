import { combineReducers } from 'redux';
import reduceReducers from "reduce-reducers";
import uiTranslationsReducer from './uiTranslations';
import translationsReducer from './translations';
import tagsReducer from './tags';

export default combineReducers({
    translations: reduceReducers(uiTranslationsReducer, translationsReducer),
    tags: tagsReducer
});
