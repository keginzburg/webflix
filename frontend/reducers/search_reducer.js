import { RECEIVE_SEARCH_VIDEOS, CLEAR_SEARCH_VIDEOS } from "../actions/search_actions";

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_VIDEOS:
      let keys = Object.keys(action.videos)
      nextState = Object.assign({}, {...keys});
      return nextState;
    case CLEAR_SEARCH_VIDEOS:
      nextState = Object.assign({}, {});
      return nextState;
    default:
      return state;
  }
}

export default searchReducer;