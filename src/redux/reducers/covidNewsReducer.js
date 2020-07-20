import * as types from '../actions/types';

const initialState = {
  loading: false,
  news: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        error: '',
        // loading: false,
      };

    case types.FETCH_NEWS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
