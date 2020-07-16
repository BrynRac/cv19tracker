import * as types from '../actions/types';

const initialState = {
  loading: false,
  countries: [],
  country: {},
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        error: '',
        loading: false,
      };

    case types.FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        error: action.payload,
        countries: [],
        loading: false,
      };

    case types.SELECT_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
}
