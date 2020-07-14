import * as types from '../actions/types';

export default function counter(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;

    case types.DECREMENT:
      return state - 1;

    case types.RESET:
      return (state = 0);

    case types.NEW_COUNT:
      return (state = action.num);
    default:
      return state;
  }
}
