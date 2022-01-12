import { getAllVideos, getVideo } from "../util/video_api_utils";
import { receiveFeaturedTitle } from "./session_actions";

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const receiveVideos = (videos) => {
  
  return {
    type: RECEIVE_VIDEOS,
    videos
  }
}

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const receiveVideo = (video) => {
  
  return {
    type: RECEIVE_VIDEO,
    video
  }
}

export const CLEAR_VIDEOS = 'CLEAR_VIDEOS';
export const clearVideos = () => {

  return {
    type: CLEAR_VIDEOS
  }
}

export const fetchAllVideos = () =>  dispatch => {
  
  return getAllVideos()
    .then(videos => dispatch(receiveVideos(videos)))
}

export const fetchVideo = videoId => dispatch => {
  
  return getVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
}

