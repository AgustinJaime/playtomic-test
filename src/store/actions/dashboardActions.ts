import axios from 'axios'

export const GET_DATA_PENDING = 'GET_DATA_PENDING'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE'

const getDataPending = () => {
  return {
    type: GET_DATA_PENDING,
  }
}

const getDataSuccess = (countries: any) => {
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

export const getData = () => (dispatch: any) => {
  dispatch(getDataPending())
  axios
    .get('https://api.covid19api.com/summary')
    .then(({ data }) => {
      const newData = data.Countries.filter(
        (country: any) => country.NewDeaths > 200
      ).sort((a: any, b: any) => (a.NewDeaths < b.NewDeaths ? 1 : -1))
      dispatch(getDataSuccess(newData))
    })
    .catch((error: any) => {
      getDataFailure()
      console.log(error)
    })
}
