import { getMylistedVideos } from "../util/mylist_api_utils";

export const RECEIVE_MYLISTED_VIDEOS = 'RECEIVE_MYLISTED_VIDEOS';
export const receiveMylistedVideos = (videos) => {
  debugger
  return {
    type: RECEIVE_MYLISTED_VIDEOS,
    videos
  }
}

export const fetchMylistedVideos = (profileId) => dispatch => {
  debugger
  return getMylistedVideos(profileId)
    .then(videos => dispatch(receiveMylistedVideos(videos)))
}