import { CountryData } from './../actions/dashboardActions'
import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../actions/'

export interface DashboardState {
  pending: boolean
  error: boolean
  countries?: CountryData[] | []
}

export interface DashboardAction {
  type: string
  countries?: CountryData[]
}

const initialState = {
  pending: false,
  error: false,
  countries: [],
}

export default (
  state: DashboardState = initialState,
  action: DashboardAction
): DashboardState => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        pending: true,
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        countries: action.countries,
      }
    case GET_DATA_FAILURE:
      return {
        ...state,
        error: true,
      }
    default:
      return state
  }
}
