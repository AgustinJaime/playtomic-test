import { resetData } from './dashboardActions'
import { UserCredential, User } from '@firebase/auth-types'
import { googleProvider, myFirebase } from '../../services/firebase/firebase'
import { AuthActions } from '../reducers/auth'
import actionTypeKeys from '../actionTypeKeys'

export type UserType = UserCredential | User

export type DispatchAuthAction = (arg: AuthActions) => AuthActions

const requestLogin = () => {
  return {
    type: actionTypeKeys.LOGIN_REQUEST,
  }
}

const receiveLogin = (user: UserType) => {
  return {
    type: actionTypeKeys.LOGIN_SUCCESS,
    user,
  }
}

const loginError = () => {
  return {
    type: actionTypeKeys.LOGIN_FAILURE,
  }
}

const requestLogout = () => {
  return {
    type: actionTypeKeys.LOGOUT_REQUEST,
  }
}

const receiveLogout = () => {
  return {
    type: actionTypeKeys.LOGOUT_SUCCESS,
  }
}

const logoutError = () => {
  return {
    type: actionTypeKeys.LOGOUT_FAILURE,
  }
}

const verifyRequest = () => {
  return {
    type: actionTypeKeys.VERIFY_REQUEST,
  }
}

const verifySuccess = () => {
  return {
    type: actionTypeKeys.VERIFY_SUCCESS,
  }
}

export const resetUser = () => {
  return {
    type: actionTypeKeys.RESET_USER,
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
export const loginGoogleUser = () => (dispatch: DispatchAuthAction) => {
  dispatch(requestLogin())
  myFirebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      result.user && dispatch(receiveLogin(result.user))
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
