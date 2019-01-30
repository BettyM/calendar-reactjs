import moment from 'moment'
import { handleActions } from 'redux-actions'

const defaultState = {
  selectedDate: moment()
}

const reducerMap = {
  'SET_SELECTED_DATE': (state, {payload}) => {
    return {
      ...state,
      selectedDate: moment(payload),
    }
  },
}

export default handleActions(reducerMap, defaultState)
