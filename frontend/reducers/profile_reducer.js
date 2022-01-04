import { RECEIVE_CURRENT_USER_PROFILES, RECEIVE_NEW_PROFILE, UPDATE_PROFILE, DELETE_PROFILE } from "../actions/profile_actions";

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILES:
      nextState = Object.assign({}, action.profiles);
      return nextState;
    case RECEIVE_NEW_PROFILE:
      nextState[action.profile.id] = action.profile;
      return nextState;
    case UPDATE_PROFILE:
      nextState[action.profile.id] = action.profile;
      return nextState;
    case DELETE_PROFILE:
      delete nextState[action.profile.id];
      return nextState;
    default:
      return state;
  }
}

export default profileReducer;

