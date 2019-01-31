import { connect } from 'react-redux'
import { calendarActions } from '../store/actions'
import {
  getReminder,
  getReminders,
} from '../store/reducers/selectors'
import Calendar from './calendar'

const mapDispatchToProps = {
  setReminder: calendarActions.startReminder,
  updateReminders: calendarActions.saveReminders,
}

const mapStateToProps = (state) => {
  return {
    reminderObject: getReminder(state),
    reminders: getReminders(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)
