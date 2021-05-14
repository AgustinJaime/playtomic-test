import { resetData } from './dashboardActions'
import { UserCredential, User } from '@firebase/auth-types'
import { myFirebase } from '../firebase/firebase'
import { AuthActions } from '../reducers/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const VERIFY_REQUEST = 'VERIFY_REQUEST'
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS'
export const RESET_USER = 'RESET_USER'

export type UserType = UserCredential | User

export type DispatchAuthAction = (arg: AuthActions) => AuthActions

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST,
  }
}

const receiveLogin = (user: UserType) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  }
}

const loginError = () => {
  return {
    type: LOGIN_FAILURE,
  }
}

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST,
  }
}

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE,
  }
}

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST,
  }
}

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS,
  }
}

export const resetUser = () => {
  return {
    type: RESET_USER,
  }
}

export const loginUser = (email: string, password: string) => (
  dispatch: DispatchAuthAction
) => () => {
  dispatch(requestLogin())
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(receiveLogin(user))
    })
    .catch((error) => {
      console.log(error)
      dispatch(loginError())
    })
}

export const logoutUser = () => (dispatch: DispatchAuthAction) => {
  dispatch(requestLogout())
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(resetUser())
      dispatch(resetData())
      dispatch(receiveLogout())
    })
    .catch((error) => {
      console.log(error)
      dispatch(logoutError())
    })
}

export const verifyAuth = () => (dispatch: DispatchAuthAction) => {
  dispatch(verifyRequest())
  myFirebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(receiveLogin(user))
    }
    dispatch(verifySuccess())
  })
}
