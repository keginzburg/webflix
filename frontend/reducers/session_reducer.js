import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_NEW_EMAIL, REMOVE_NEW_EMAIL, RECEIVE_CURRENT_PROFILE, LOGOUT_CURRENT_PROFILE, RECEIVE_EDIT_PROFILE, DISCARD_EDIT_PROFILE, RECEIVE_FEATURED_TITLE } from "../actions/session_actions";
import { RECEIVE_VIDEOS } from "../actions/video_actions";


const _nullSession = {
  id: null,
  newEmail: null,
  currentProfile: null,
  editProfile: null,
  featuredTitle: null,
}

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState["id"] = action.currentUser.id;
      return nextState;
      //return Object.assign({}, { id: action.currentUser.id })
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_NEW_EMAIL:
      nextState["newEmail"] = action.newEmail;
      return nextState;
    case REMOVE_NEW_EMAIL:
      nextState["newEmail"] = null;
      return nextState;
    case RECEIVE_VIDEOS:
      // debugger
      nextState["featuredTitle"] = action.videos[Math.ceil(Math.random() * Object.keys(action.videos).length)];
      // debugger
      return nextState;
    case RECEIVE_CURRENT_PROFILE:
      nextState["currentProfile"] = action.currentProfile;
      return nextState;
    case LOGOUT_CURRENT_PROFILE:
      nextState["currentProfile"] = null;
      return nextState;
    case RECEIVE_EDIT_PROFILE:
      nextState["editProfile"] = action.profileId;
      return nextState;
    case DISCARD_EDIT_PROFILE:
      nextState["editProfile"] = null;
    case RECEIVE_FEATURED_TITLE:
      
      nextState["featuredTitle"] = action.featuredTitle;
      return nextState;
    default:
      return state;
  }
}

export default sessionReducer;