import PropTypes from 'prop-types'
import React, { Component } from 'react'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Pickers from './pickers'

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentReminder: props.reminderObject,
    }
  }

  onReminderChange = e => {
    const data = e.target.value
    this.setState(prevState => ({
      currentReminder: {
        ...prevState.currentReminder,
        reminder: data
      }
    }))
  }

  onDateChange = e => {
    this.setState(prevState => ({
      currentReminder: {
        ...prevState.currentReminder,
        date: moment(e)
      }
    }))
  }

  render() {
    const {
      editMode,
      cancelReminder,
      removeReminder,
      saveReminder,
    } = this.props

    const { currentReminder } = this.state

    return (
      <div className="modal">
        <section className="modal-main">
          <TextField
            className="modal-input"
            id="reminder"
            name="reminder"
            onChange={this.onReminderChange}
            InputProps={{ inputProps: { maxLength: 30 } }}
            label="Reminder"
            value={currentReminder.reminder}
          />
          <div className="modal-pickers">
            <Pickers
              onDateChange={this.onDateChange}
              selectedDate={moment(currentReminder.date)}
            />
          </div>
          <div className="modal-options">
            {editMode && (
              <Button
                className="modal-button"
                color="secondary"
                variant="contained"
                onClick={removeReminder}
              >
                Delete
              </Button>
            )}
            <Button
              className="modal-button"
              color="secondary"
              variant="contained"
              onClick={cancelReminder}
            >
              Cancel
            </Button>
            <Button
              className="modal-button"
              color="primary"
              variant="contained"
              onClick={() => saveReminder(currentReminder)}
            >
              Save
            </Button>
          </div>
        </section>
      </div>
    )
  }
}

Modal.propTypes = {
  cancelReminder: PropTypes.func,
  editMode: PropTypes.bool,
  onDateChange: PropTypes.func,
  onReminderChange: PropTypes.func,
  reminderObject: PropTypes.object,
  removeReminder: PropTypes.func,
  saveReminder: PropTypes.func,
}
