import { getSearchVideos } from "../util/search_api_utils";

export const RECEIVE_SEARCH_VIDEOS = 'RECEIVE_SEARCH_VIDEOS';
export const receiveSearchVideos = (videos) => {

  return {
    type: RECEIVE_SEARCH_VIDEOS,
    videos
  }
}

export const CLEAR_SEARCH_VIDEOS = 'CLEAR_SEARCH_VIDEOS';
export const clearSearchVideos = () => {

  return {
    type: CLEAR_SEARCH_VIDEOS,
  }
}

export const fetchSearchVideos = (search) => dispatch => {

  return getSearchVideos(search)
    .then(videos => dispatch(receiveSearchVideos(videos)))
}