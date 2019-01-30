import { connect } from 'react-redux'
import { calendarActions } from '../store/actions'
import {
  getSelectedDate,
  getReminders,
} from '../store/reducers/selectors'
import Calendar from './calendar'

const mapDispatchToProps = {
  updateReminders: calendarActions.setReminder,
  updateSelectedDate: calendarActions.setDate,
}

const mapStateToProps = (state) => {
  return {
    selectedDate: getSelectedDate(state),
    reminders: getReminders(state),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar)
