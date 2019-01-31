import { createActions } from 'redux-actions'

export const calendarActions = createActions({
  SET_REMINDER: undefined,
  SET_REMINDERS: undefined,
})

calendarActions.startReminder = reminder => async dispatch => {
  await dispatch(calendarActions.setReminder(reminder))
}

calendarActions.saveReminders = reminders => async dispatch => {
  await dispatch(calendarActions.setReminders(reminders))
}
