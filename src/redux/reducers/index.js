import { combineReducers } from 'redux';
import count from './counterReducer.js';
import countB from './counterReducerB.js';
export default combineReducers({
  count,
  countB,
});
