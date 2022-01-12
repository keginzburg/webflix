import { getMylistedVideos, postMylistedVideo, deleteMylistedVideo } from "../util/mylist_api_utils";

export const RECEIVE_MYLISTED_VIDEOS = 'RECEIVE_MYLISTED_VIDEOS';
export const receiveMylistedVideos = (mylists) => {
  
  return {
    type: RECEIVE_MYLISTED_VIDEOS,
    mylists
  }
}

export const fetchMylistedVideos = profileId => dispatch => {
  
  return getMylistedVideos(profileId)
    .then(mylists => dispatch(receiveMylistedVideos(mylists)))
}

export const RECEIVE_MYLISTED_VIDEO = 'RECEIVE_MYLISTED_VIDEO';
export const receiveMylistedVideo = (mylist) => {
  
  return {
    type: RECEIVE_MYLISTED_VIDEO,
    mylist
  }
}


export const createMylistedVideo = mylist => dispatch => {
  
  return postMylistedVideo(mylist)
    .then(mylist => dispatch(receiveMylistedVideo(mylist)))
}


export const DISCARD_MYLISTED_VIDEO = 'DISCARD_MYLISTED_VIDEO';
export const discardMylistedVideo = (mylist) => {

  return {
    type: DISCARD_MYLISTED_VIDEO,
    mylist
  }
}

export const destroyMylistedVideo = (mylistId) => dispatch => {

  return deleteMylistedVideo(mylistId)
    .then(mylist => dispatch(discardMylistedVideo(mylist)))
}