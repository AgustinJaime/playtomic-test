import { DashboardAction } from './../reducers/dashboardReducer'
import { formatData } from './../../utils/actionsUtils'
import axios from 'axios'
import actionTypeKeys from '../actionTypeKeys'

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

export interface NewData {
  cases: CountryData[]
  deaths: CountryData[]
}

const getDataPending = () => {
  return {
    type: actionTypeKeys.GET_DATA_PENDING,
  }
}

const getDataSuccess = (countries: NewData) => {
  return {
    type: actionTypeKeys.GET_DATA_SUCCESS,
    countries,
  }
}

const getDataFailure = () => {
  return {
    type: actionTypeKeys.GET_DATA_FAILURE,
  }
}

export const resetData = () => {
  return {
    type: actionTypeKeys.RESET_DATA,
  }
}

export const getData = () => (dispatch: DispatchDashboardAction) => {
  dispatch(getDataPending())
  axios
    .get('https://api.covid19api.com/summary')
    .then(({ data }) => {
      const newData: NewData = formatData(data.Countries)
      dispatch(getDataSuccess(newData))
    })
    .catch((error) => {
      getDataFailure()
      console.log(error)
    })
}
