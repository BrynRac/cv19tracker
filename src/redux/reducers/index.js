import { combineReducers } from 'redux';
// import count from './counterReducer';
// import countB from './counterReducerB';
import countries from './countriesReducer';

export default combineReducers({
  countries,
});
