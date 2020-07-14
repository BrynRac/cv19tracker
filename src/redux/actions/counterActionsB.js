import * as types from './types'

export function incrementB() {
    return {
      type: types.INCREMENT_B,
    };
  }
  
  export function decrementB() {
    return {
      type: types.DECREMENT_B,
    };
  }
  
  export function resetB() {
    return {
      type: types.RESET_B,
    };
  }
  