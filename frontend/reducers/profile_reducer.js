import { RECEIVE_CURRENT_USER_PROFILES } from "../actions/profile_actions";

const profileReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILES:
      nextState = Object.values(action.profiles);
      return nextState;
    default:
      return state;
  }
}

export default profileReducer;