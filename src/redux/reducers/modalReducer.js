import * as types from '../actions/types';

const initialState = {
  modalOpen: false,
  modalContent: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };

    case types.UPDATE_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload,
      };

    default:
      return state;
  }
}
