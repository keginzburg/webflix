import { postNewUser, postUser, deleteUser } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
})

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
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
