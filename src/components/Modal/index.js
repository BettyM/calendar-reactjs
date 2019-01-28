import PropTypes from 'prop-types'
import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Pickers from './pickers'

const Modal = ({
  cancelReminder,
  saveReminder,
  selectedDate,
  onDateChange,
}) => {
  return (
    <div className="modal">
      <section className="modal-main">
        <TextField
          className="modal-input"
          id="reminder"
          InputProps={{ inputProps: { maxLength: 30 } }}
          label="Reminder"
        />
        <div className="modal-pickers">
          <Pickers
            onDateChange={onDateChange}
            selectedDate={selectedDate}
          />
        </div>
        <div className="modal-options">
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
            onClick={saveReminder}
          >
            Save
          </Button>
        </div>
      </section>
    </div>
  )
}

Modal.propTypes = {
  cancelReminder: PropTypes.func,
  onDateChange: PropTypes.func,
  saveReminder: PropTypes.func,
  selectedDate: PropTypes.instanceOf('date'),
}

export default Modal
