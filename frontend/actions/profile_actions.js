import { getUserProfiles, postUserProfile, patchUserProfile, deleteUserProfile } from "../util/profile_api_utils";
import { receiveErrors } from "./session_actions";

export const RECEIVE_CURRENT_USER_PROFILES = 'RECEIVE_CURRENT_USER_PROFILES';
export const receiveCurrentUserProfiles = (profiles) => {
return {
  type: RECEIVE_CURRENT_USER_PROFILES,
  profiles
}}

export const fetchUserProfiles = userId => dispatch => {
  
  return getUserProfiles(userId)
    .then(profiles => dispatch(receiveCurrentUserProfiles(profiles)));
}

export const RECEIVE_NEW_PROFILE = 'RECEIVE_NEW_PROFILE';
export const receiveNewProfile = (profile) => {
  return {
  type: RECEIVE_NEW_PROFILE,
  profile
  }
}

export const createNewUserProfile = newProfile => dispatch => {
  
  return postUserProfile(newProfile)
    .then(profile => dispatch(receiveNewProfile(profile)), errors => dispatch(receiveErrors(errors)))
}


export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfile = (profile) => {
  
  return {
    type: UPDATE_PROFILE,
    profile
  }
}

export const updateUserProfile = updatedProfile => dispatch => {
  
  return patchUserProfile(updatedProfile)
    .then(profile => dispatch(updateProfile(profile)));
}

export const DELETE_PROFILE = 'DELETE_PROFILE';
export const deleteProfile = (profile) => {

  return {
    type: DELETE_PROFILE,
    profile
  }
}


export const destroyUserProfile = profileId => dispatch => {

  return deleteUserProfile(profileId)
    .then((profile) => dispatch(deleteProfile(profile)))
}