import moment from 'moment'
import { handleActions } from 'redux-actions'

const defaultState = {
  currentMonth: moment().month(),
  currentYear: moment().year(),
}

const reducerMap = {
  'SET_CURRENT_MONTH': (state, {payload}) => {
    return {
      ...state,
      currentMonth: payload,
    }
  },
  'SET_CURRENT_YEAR': (state, {payload}) => {
    return {
      ...state,
      currentYear: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
