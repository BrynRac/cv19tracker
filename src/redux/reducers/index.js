import { combineReducers } from 'redux';
import covid from './covidReducer';
import global from './covidGlobalsReducer';
import news from './covidNewsReducer';
import modal from './modalReducer';

export default combineReducers({
  covid,
  global,
  news,
  modal,
});
