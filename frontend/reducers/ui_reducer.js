import { RECEIVE_EDIT_MODAL, DISCARD_EDIT_MODAL } from "../actions/ui_actions";


const _nullUi = {
  modal: null,
}

const uiReducer = (state = _nullUi, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_EDIT_MODAL:
      
      nextState["modal"] = "editProfile";
      return nextState;
    case DISCARD_EDIT_MODAL:
      nextState["modal"] = null;
      return nextState;
    default:
      return state;
  }
}

export default uiReducer;