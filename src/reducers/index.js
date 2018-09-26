import { combineReducers } from 'redux';
import translations from './translations';
import tags from './tags';
import tagsTranslations from './tagsTranslations';

export default combineReducers({
  translations,
  tags,
  tagsTranslations
});
