import { getUserProfiles } from "../util/profile_api_utils";

export const RECEIVE_CURRENT_USER_PROFILES = 'RECEIVE_CURRENT_USER_PROFILES';
export const receiveCurrentUserProfiles = (profiles) => {
return {
  type: RECEIVE_CURRENT_USER_PROFILES,
  profiles
}}

export const fetchUserProfiles = (userId) => dispatch => {
  
  return getUserProfiles(userId)
    .then(profiles => dispatch(receiveCurrentUserProfiles(profiles)));
}

