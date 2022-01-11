import { RECEIVE_LIKES, RECEIVE_LIKE, DISCARD_LIKE } from "../actions/like_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const likeReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKES:
      nextState = Object.assign({}, action.likes);
      return nextState;
    case RECEIVE_LIKE:
      nextState[action.like.id] = action.like;
      return nextState;
    case DISCARD_LIKE:
      delete nextState[action.like.id];
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState = Object.assign({}, {});
      return nextState;
    default:
      return state;
  }
}

export default likeReducer;