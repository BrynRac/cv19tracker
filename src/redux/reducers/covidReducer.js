import * as types from '../actions/types';
import { initialState } from '../initialState';

export default function covidReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COVID_REQUEST:
      return {
        loading: true,
      };
    case types.FETCH_COVID_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
        error: '',
        loading: false,
      };
    case types.FETCH_COVID_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
