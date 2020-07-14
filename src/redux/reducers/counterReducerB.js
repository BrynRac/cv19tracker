import * as types from '../actions/types';

export default function counterB(state = 0, action) {
  switch (action.type) {
    case types.INCREMENT_B:
      return state + 1;
    case types.DECREMENT_B:
      return state - 1;
    case types.RESET_B:
      return (state = 0);
    default:
      return state
  }
}
