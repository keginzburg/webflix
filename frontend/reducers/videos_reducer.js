import { RECEIVE_VIDEOS, RECEIVE_VIDEO, CLEAR_VIDEOS } from "../actions/video_actions";

const videoReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_VIDEOS:
      nextState = Object.assign({}, action.videos);
      return nextState;
    case RECEIVE_VIDEO:
      nextState[action.video.id] = action.video;
      return nextState;
    case CLEAR_VIDEOS:
      return {};
    default:
      return state;
  }
}

export default videoReducer;