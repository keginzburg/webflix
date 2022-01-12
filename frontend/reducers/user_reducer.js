import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let nextState = Object.assign({}, { [action.currentUser.id]: action.currentUser });
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState = Object.assign({}, {});
      return nextState;
    default:
      return state;
  }
}

export default userReducer;