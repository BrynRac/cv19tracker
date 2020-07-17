import { combineReducers } from 'redux';
import covid from './covidReducer';
import global from './covidGlobalsReducer';

export default combineReducers({
  covid,
  global,
});
