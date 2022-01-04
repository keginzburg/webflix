

export const RECEIVE_EDIT_MODAL = 'RECEIVE_EDIT_MODAL';
export const receiveEditModal = () => {
  return {
    type: RECEIVE_EDIT_MODAL,
  }
}

export const DISCARD_EDIT_MODAL = 'DISCARD_EDIT_MODAL';
export const discardEditModal = () => ({
  type: DISCARD_EDIT_MODAL,
})