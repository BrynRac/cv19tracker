import * as types from '../actions/types';

const initialState = {
  loading: false,
  globals: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_GLOBALS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_GLOBALS_SUCCESS:
      return {
        ...state,
        globals: action.payload,
        error: '',
        loading: false,
      };

    case types.FETCH_GLOBALS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
