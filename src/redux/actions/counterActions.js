import * as types from './types';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function decrement() {
  return {
    type: types.DECREMENT,
  };
}

export function reset() {
  return {
    type: types.RESET,
  };
}

export function newCount(num) {
  return {
    type: types.NEW_COUNT,
    num,
  };
}
