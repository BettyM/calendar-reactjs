import { handleActions } from 'redux-actions'

const defaultState = {
  reminder: {},
  reminders: []
}

const reducerMap = {
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
