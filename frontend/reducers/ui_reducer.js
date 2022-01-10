import { RECEIVE_EDIT_MODAL, DISCARD_EDIT_MODAL, RECEIVE_ICON_MODAL, DISCARD_ICON_MODAL, RECEIVE_SHOW_MODAL, DISCARD_SHOW_MODAL, RECEIVE_WATCH, DISCARD_WATCH } from "../actions/ui_actions";


const _nullUi = {
  modal: null,
  play: null,
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
    case RECEIVE_ICON_MODAL:
      nextState["modal"] = "editProfileIcon";
      return nextState;
    case DISCARD_ICON_MODAL:
      nextState["modal"] = null;
      return nextState;
    case RECEIVE_SHOW_MODAL:
      nextState["modal"] = "showTitle";
      return nextState;
    case DISCARD_SHOW_MODAL:
      nextState["modal"] = null;
      return nextState;
    case RECEIVE_WATCH:
      nextState["play"] = "playTitle";
      return nextState;
    case DISCARD_WATCH:
      nextState["play"] = null;
      return nextState;
    default:
      return state;
  }
}

export default uiReducer;