import { getAllVideos, getVideo } from "../util/video_api_utils";

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const receiveVideos = (videos) => {
  debugger
  return {
    type: RECEIVE_VIDEOS,
    videos
  }
}

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const receiveVideo = (video) => {
  debugger
  return {
    type: RECEIVE_VIDEO,
    video
  }
}

export const fetchAllVideos = () =>  dispatch => {
  debugger
  return getAllVideos()
    .then(videos => dispatch(receiveVideos(videos)))
}

export const fetchVideo = videoId => dispatch => {
  debugger
  return getVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
}
