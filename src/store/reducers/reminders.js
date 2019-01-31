import moment from 'moment'
import { handleActions } from 'redux-actions'

const defaultState = {
  currentMonth: moment().month(),
  reminder: {},
  reminders: []
}

const reducerMap = {
  'SET_CURRENT_MONTH': (state, {payload}) => {
    return {
      ...state,
      currentMonth: payload,
    }
  },
  'SET_REMINDER': (state, {payload}) => {
    return {
      ...state,
      reminder: payload,
    }
  },
  'SET_REMINDERS': (state, {payload}) => {
    return {
      ...state,
      reminders: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
