import { combineReducers } from 'redux';
import mode from './mode';
import translations from './translations';

export default combineReducers({
  mode,
  translations
});
