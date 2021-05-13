import { combineReducers } from 'redux'
import auth from './auth'
import dashboard from './dashboardReducer'

export default combineReducers({ auth, dashboard })
