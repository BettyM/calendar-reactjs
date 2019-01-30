import { combineReducers } from 'redux'
import reminders from './reminders'
import selectedDate from './selectedDate'

const rootReducer = combineReducers({
  reminders,
  selectedDate,
})

export default rootReducer
/*
import { handleActions } from 'redux-actions'

const defaultState = {
  selectedDate: []
}

const reducerMap = {
  'CALENDAR/SET_SELECTED_DATE': (state, {payload}) => {
    console.log('Reducer', payload)
    return { ...state }
  }
}

export default handleActions(reducerMap, defaultState)
*/
