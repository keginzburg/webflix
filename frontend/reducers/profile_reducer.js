import { RECEIVE_CURRENT_USER_PROFILES, RECEIVE_NEW_PROFILE } from "../actions/profile_actions";

const profileReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = state.map(ele => ele);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_PROFILES:
      nextState = Object.values(action.profiles);
      return nextState;
    case RECEIVE_NEW_PROFILE:
      nextState.push(action.profile);
      return nextState;
    default:
      return state;
  }
}

export default profileReducer;

