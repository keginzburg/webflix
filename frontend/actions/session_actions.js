import { postNewUser, postUser, deleteUser } from '../util/session_api_util';

export const RECEIVE_NEW_EMAIL = 'RECEIVE_NEW_EMAIL';
export const receiveNewEmail = (newEmail) => ({
  type: RECEIVE_NEW_EMAIL,
  newEmail
})

export const REMOVE_NEW_EMAIL = 'REMOVE_NEW_EMAIL';
export const removeNewEmail = () => ({
  type: REMOVE_NEW_EMAIL,
})

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const RECEIVE_CURRENT_PROFILE = 'RECEIVE_CURRENT_PROFILE';
export const receiveCurrentProfile = (currentProfile) => ({
  type: RECEIVE_CURRENT_PROFILE,
  currentProfile
})

export const LOGOUT_CURRENT_PROFILE = 'LOGOUT_CURRENT_PROFILE';
export const logoutCurrentProfile = () => ({
  type: LOGOUT_CURRENT_PROFILE,
})

export const RECEIVE_EDIT_PROFILE = 'RECEIVE_EDIT_PROFILE';
export const receiveEditProfile = (profileId) => ({
  type: RECEIVE_EDIT_PROFILE,
  profileId
})

export const DISCARD_EDIT_PROFILE = 'DISCARD_EDIT_PROFILE';
export const discardEditProfile = () => ({
  type: DISCARD_EDIT_PROFILE,
})

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const signup = (user) => (dispatch) => {
  return postNewUser(user)
    .then(user => { dispatch(receiveCurrentUser(user)) }, errors => { dispatch(receiveErrors(errors)) })
}

export const login = (user) => (dispatch) => {
  return postUser(user)
    .then(user => { dispatch(receiveCurrentUser(user)) }, errors => { dispatch(receiveErrors(errors)) })
}

export const logout = () => (dispatch) => {
  return deleteUser()
    .then(() => { dispatch(logoutCurrentUser()) }, errors => { dispatch(receiveErrors(errors)) })
}
