import { createSelector } from 'reselect'

const getRemindersStore = state => state.reminders || []
const getDateStore = state => state.selectedDate || {}

export const getReminder = createSelector(getRemindersStore, data => {
  return data.reminder
})

export const getReminders = createSelector(getRemindersStore, data => {
  return data.reminders
})

export const getCurrentMonth = createSelector(getDateStore, data => {
  return data.currentMonth
})

export const getCurrentYear = createSelector(getDateStore, data => {
  return data.currentYear
})

