import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../actions/'

const initialState = {
  pending: false,
  error: false,
  countries: [],
}

export default (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA_PENDING:
      return {
        ...state,
        pending: true,
      }
    case GET_DATA_SUCCESS:
      return {
        ...state,
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
