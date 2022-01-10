import { RECEIVE_MYLISTED_VIDEOS } from "../actions/mylist_actions";

const mylistReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MYLISTED_VIDEOS:
      nextState = Object.assign({}, action.videos);
      return nextState;
    default:
      return state;
  }
}

export default mylistReducer;