import * as types from './types';

export const toggleModal = (bool) => {
  return { type: types.TOGGLE_MODAL, payload: bool };
};

export const updateModalContent = (modalContent) => {
  return {
    type: types.UPDATE_MODAL_CONTENT,
    payload: modalContent,
  };
};
