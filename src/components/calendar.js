import _ from 'lodash'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DaysSection from './days'
import Modal from './Modal/index'
import WeekdaysSection from './weekdays'

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMonth: moment().month(),
      editReminder: false,
      showModal: false,
    }
  }
  
  addReminder = (e, reminder = {}) => {
    e.stopPropagation()
    if(e.target.tagName === "DIV") {
        this.props.setReminder({
        id: moment().valueOf(),
        date: e.target.id,
        reminder: ""
      })
    } else {
      this.setState({ editReminder: true })
      const data = _.find(this.props.reminders, {id: reminder.data.id})
      this.props.setReminder(data)
    }

    this.setState({
      showModal: true,
    })
  }
  
  cancelReminder = () => {
    this.setState({
      showModal: false,
      editReminder: false,
    })
    this.props.setReminder({})
  }

  saveReminder = async (data) => {
    const remindersData = this.props.reminders
    const { editReminder } = this.state

    if(editReminder) {
      const index = _.findIndex(remindersData, {id: data.id})
      const reminder = remindersData[index]
      remindersData[index] = {
        id: reminder.id,
        date: data.date,
        reminder: data.reminder
      }
    } else {
      const reminder = {
        id: data.id,
        date: data.date,
        reminder: data.reminder
      }
      remindersData.push(reminder)
    }

    await this.props.updateReminders(remindersData)
    await this.props.setReminder({})

    this.setState({
      showModal: false,
      editReminder: false,
    })
  }

  removeReminder = () => {
    //TODO: remove reminder
  }

  render() {
    const {
      currentMonth,
      editReminder,
      showModal
    } = this.state
    const { reminderObject } = this.props
    
    return (
      <div className="calendar">
        <WeekdaysSection />
        <DaysSection
          month={currentMonth}
          onClick={this.addReminder}
          reminders={this.props.reminders}
        />
        {showModal && 
          <Modal
            cancelReminder={this.cancelReminder}
            editMode={editReminder}
            saveReminder={this.saveReminder}
            onDateChange={this.onDateChange}
            onReminderChange={this.onReminderChange}
            reminderObject={reminderObject}
            removeReminder={this.removeReminder}
          />
        }
      </div>
    )
  }
}

Calendar.propTypes = {
  reminderObject: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    reminder: PropTypes.string,
  }),
  reminders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    reminder: PropTypes.string,
  })),
  selectedDate: PropTypes.object,
  setReminder: PropTypes.func,
  updateReminders: PropTypes.func,
}
