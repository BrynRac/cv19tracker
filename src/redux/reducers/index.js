import { combineReducers } from 'redux';
import covid from './covidReducer';
import global from './covidGlobalsReducer';
import news from './covidNewsReducer';

export default combineReducers({
  covid,
  global,
  news,
});
