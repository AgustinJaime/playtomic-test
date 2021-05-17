import { NewData } from './../actions/dashboardActions'
import actionTypeKeys from '../actionTypeKeys'

export interface DashboardState {
  pending: boolean
  error: boolean
  countries?: NewData
}

export interface DashboardAction {
  type: string
  countries?: NewData
}

const initialState = {
  pending: false,
  error: false,
  countries: { cases: [], deaths: [] },
}

export default (
  state: DashboardState = initialState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case actionTypeKeys.GET_DATA_PENDING:
      return {
        ...state,
        pending: true,
      }
    case actionTypeKeys.GET_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.countries,
      }
    case actionTypeKeys.GET_DATA_FAILURE:
      return {
        ...state,
        error: true,
      }
    case actionTypeKeys.RESET_DATA:
      return {
        ...state,
        ...initialState,
      }

    default:
      return state
  }
}
