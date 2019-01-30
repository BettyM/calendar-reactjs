import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DaysSection from './days'
import Modal from './Modal/index'
import WeekdaysSection from './weekdays'

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      currentMonth: moment().month(),
      currentReminder: null,
      showModal: false,
    }
  }

  addReminder = date => {
    this.props.updateSelectedDate(date.id)
    this.setState({
      showModal: true,
    })
  }

  onDateChange = e => {
    this.props.updateSelectedDate(moment(e))
  }

  onReminderChange = e => {
    this.setState({ currentReminder: e.target.value })
  }

  cancelReminder = () => {
    this.setState({ showModal: false })
  }

  saveReminder = () => {
    const { currentReminder } = this.state
    const remindersData = this.props.reminders
    const reminder = {
      date: this.props.selectedDate.format(),
      reminder: currentReminder
    }
    remindersData.push(reminder)

    this.props.updateReminders(remindersData)

    this.setState({
      showModal: false
    })
  }

  render() {
    const { currentMonth, showModal } = this.state
    return (
      <div className="calendar">
        <WeekdaysSection />
        <DaysSection
          month={currentMonth}
          onClickDay={this.addReminder}
        />
        {showModal && 
          <Modal
            cancelReminder={this.cancelReminder}
            saveReminder={this.saveReminder}
            onDateChange={this.onDateChange}
            onReminderChange={this.onReminderChange}
            selectedDate={this.props.selectedDate}
          />
        }
      </div>
    )
  }
}

Calendar.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    reminder: PropTypes.string,
  })),
  selectedDate: PropTypes.object,
  updateReminders: PropTypes.func,
  updateSelectedDate: PropTypes.func,
}
