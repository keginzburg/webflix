import { RECEIVE_MYLISTED_VIDEOS, RECEIVE_MYLISTED_VIDEO, DISCARD_MYLISTED_VIDEO } from "../actions/mylist_actions";

const mylistReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MYLISTED_VIDEOS:
      
      nextState = Object.assign({}, action.mylists);
      return nextState;
    case RECEIVE_MYLISTED_VIDEO:
      
      nextState[action.mylist.id] = action.mylist;
      return nextState;
    case DISCARD_MYLISTED_VIDEO:

      delete nextState[action.mylist.id];
      return nextState;
    default:
      return state;
  }
}

export default mylistReducer;