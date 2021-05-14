import { UserType } from './../actions/authActions'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
} from '../actions/'

export interface AuthActions {
  type: string
  user?: UserType
}

export interface AuthState {
  isLoggingIn: boolean
  isLoggingOut: boolean
  isVerifying: boolean
  loginError: boolean
  logoutError: boolean
  isAuthenticated: boolean
  verifyingError: boolean
  user?: UserType | Record<string, unknown>
}

const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  verifyingError: false,
  user: {},
}

export default (
  state: AuthState = initialState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      }
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      }
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      }
    default:
      return state
  }
}
