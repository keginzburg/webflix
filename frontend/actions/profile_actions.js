import { getUserProfiles, postUserProfile, patchUserProfile } from "../util/profile_api_utils";

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
    .then(profile => dispatch(receiveNewProfile(profile)))
}


export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const updateProfile = (profile) => {
  debugger
  return {
    type: UPDATE_PROFILE,
    profile
  }
}

export const updateUserProfile = updatedProfile => dispatch => {
  debugger
  return patchUserProfile(updateProfile)
    .then(profile => dispatch(receiveNewProfile(profile)))
}