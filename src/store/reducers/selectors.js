import { createSelector } from 'reselect'

const getDateStore = state => state.selectedDate || null
const getRemindersStore = state => state.reminders || []

export const getSelectedDate = createSelector(getDateStore, date => {
  return date.selectedDate
})

export const getReminders = createSelector(getRemindersStore, data => {
  return data.reminders
})

