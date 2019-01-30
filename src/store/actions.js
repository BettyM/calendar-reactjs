import { createActions } from 'redux-actions'

export const calendarActions = createActions({
  SET_REMINDERS: undefined,
  SET_SELECTED_DATE: undefined,
})

calendarActions.setDate = date => async dispatch => {
  dispatch(calendarActions.setSelectedDate(date))
}

calendarActions.setReminder = reminders => async dispatch => {
  await dispatch(calendarActions.setReminders(reminders))
}

//export default selectedDate
