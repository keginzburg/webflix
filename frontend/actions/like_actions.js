import { getLikes, postLike, deleteLike } from "../util/like_api_utils";

export const RECEIVE_LIKES = 'RECEIVE_LIKES';
export const receiveLikes = (likes) => {

  return {
    type: RECEIVE_LIKES,
    likes
  }
}

export const fetchLikes = profileId => dispatch => {

  return getLikes(profileId)
    .then(likes => dispatch(receiveLikes(likes)))
}

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like
  }
}

export const createLike = like => dispatch => {
  return postLike(like)
    .then(like => dispatch(receiveLike(like)))
}

export const DISCARD_LIKE = 'DISCARD_LIKE';
export const discardLike = (like) => {

  return {
    type: DISCARD_LIKE,
    like
  }
}

export const destroyLike = likeId => dispatch => {

  return deleteLike(likeId)
    .then(like => dispatch(discardLike(like)))
}