import { combineReducers } from 'redux';
import ui from './ui';
import translations from './translations';

export default combineReducers({
  ui,
  translations
});
