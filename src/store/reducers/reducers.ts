import { combineReducers } from 'redux'
import auth from './auth'
import dashboard from './dashboardReducer'

const rootReducer = combineReducers({ auth, dashboard })

export type State = ReturnType<typeof rootReducer>

export default rootReducer
