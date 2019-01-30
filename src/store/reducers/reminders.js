import { handleActions } from 'redux-actions'

const defaultState = {
  reminders: []
}

const reducerMap = {
  'SET_REMINDERS': (state, {payload}) => {
    return {
      ...state,
      reminders: payload,
    }
  },
}

export default handleActions(reducerMap, defaultState)
