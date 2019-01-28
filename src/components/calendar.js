import React, { Component } from 'react'
import moment from 'moment'
import DaysSection from './days'
import Modal from './Modal/index'
import WeekdaysSection from './weekdays'

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      currentMonth: moment().month(),
      selectedDate: moment(),
      showModal: false,
    }
  }

  addReminder = day => {
    this.setState({
      selectedDay: day.id,
      showModal: true,
    })
  }

  onDateChange = e => {
    this.setState({ selectedDate: e.target})
  }

  cancelReminder = () => {
    this.setState({ showModal: false })
  }

  saveReminder = () => {
    this.setState({
      showModal: false
    })
    //TODO save reminder
  }

  render() {
    const { currentMonth, selectedDate, showModal } = this.state
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
            selectedDate={selectedDate}
          />
        }
      </div>
    )
  }
}
