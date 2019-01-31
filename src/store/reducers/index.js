import { combineReducers } from 'redux'
import selectedDate from './selectedDate'
import reminders from './reminders'

const rootReducer = combineReducers({
  selectedDate,
  reminders,
})

export default rootReducer
