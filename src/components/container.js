import { connect } from 'react-redux'
import { calendarActions } from '../store/actions'
import {
  getCurrentMonth,
  getCurrentYear,
  getReminder,
  getReminders,
} from '../store/reducers/selectors'
import Calendar from './calendar'

const mapDispatchToProps = {
  setReminder: calendarActions.startReminder,
  updateReminders: calendarActions.saveReminders,
  updateCurrentMonth: calendarActions.saveCurrentMonth,
  updateCurrentYear: calendarActions.saveCurrentYear
}

const mapStateToProps = (state) => {
  return {
    currentMonth: getCurrentMonth(state),
    currentYear: getCurrentYear(state),
    reminderObject: getReminder(state),
    reminders: getReminders(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)
