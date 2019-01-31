import { createSelector } from 'reselect'

const getRemindersStore = state => state.reminders || []

export const getReminder = createSelector(getRemindersStore, data => {
  return data.reminder
})

export const getReminders = createSelector(getRemindersStore, data => {
  return data.reminders
})

