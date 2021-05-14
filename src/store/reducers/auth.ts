import { UserType } from './../actions/authActions'
import actionTypeKeys from '../actionTypeKeys'

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
    case actionTypeKeys.LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      }
    case actionTypeKeys.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      }
    case actionTypeKeys.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      }
    case actionTypeKeys.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      }
    case actionTypeKeys.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {},
      }
    case actionTypeKeys.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      }
    case actionTypeKeys.VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      }
    case actionTypeKeys.VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      }
    case actionTypeKeys.RESET_USER:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
