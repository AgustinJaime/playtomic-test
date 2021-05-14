import { DashboardAction } from './../reducers/dashboardReducer'
import { formatData } from './../../utils/actionsUtils'
import axios from 'axios'

export const GET_DATA_PENDING = 'GET_DATA_PENDING'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'
export const RESET_DATA = 'RESET_DATA'

export type DispatchDashboardAction = (arg: DashboardAction) => DashboardAction

export interface CountryData {
  Country: string
  CountryCode: string
  Date: string
  ID: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  Slug: string
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

const getDataPending = () => {
  return {
    type: GET_DATA_PENDING,
  }
}

const getDataSuccess = (countries: CountryData[]) => {
  return {
    type: GET_DATA_SUCCESS,
    countries,
  }
}

const getDataFailure = () => {
  return {
    type: GET_DATA_FAILURE,
  }
}

export const resetData = () => {
  return {
    type: RESET_DATA,
  }
}

export const getData = () => (dispatch: DispatchDashboardAction) => {
  dispatch(getDataPending())
  axios
    .get('https://api.covid19api.com/summary')
    .then(({ data }) => {
      const newData = formatData(data.Countries)
      dispatch(getDataSuccess(newData))
    })
    .catch((error) => {
      getDataFailure()
      console.log(error)
    })
}
