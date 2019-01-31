import { createActions } from 'redux-actions'

export const calendarActions = createActions({
  SET_CURRENT_MONTH: undefined,
  SET_CURRENT_YEAR: undefined,
  SET_REMINDER: undefined,
  SET_REMINDERS: undefined,
})

calendarActions.startReminder = reminder => async dispatch => {
  await dispatch(calendarActions.setReminder(reminder))
}

calendarActions.saveReminders = reminders => async dispatch => {
  await dispatch(calendarActions.setReminders(reminders))
}

calendarActions.saveCurrentMonth = month => async dispatch => {
  await dispatch(calendarActions.setCurrentMonth(month))
}

calendarActions.saveCurrentYear = year => async dispatch => {
  await dispatch(calendarActions.setCurrentYear(year))
}
