import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import Grid from '@material-ui/core/Grid'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from 'material-ui-pickers'

const Pickers = ({ onDateChange, selectedDate }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className="modal-grid" justify="space-around">
        <DatePicker
          margin="normal"
          label="Date picker"
          value={selectedDate}
          onChange={e => onDateChange(e)}
        />
        <TimePicker
          margin="normal"
          label="Time picker"
          value={selectedDate}
          onChange={e => onDateChange(e)}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

Pickers.propTypes = {
  onDateChange: PropTypes.func,
  selectedDate: PropTypes.object,
}

Pickers.defaultProps = {
  selectedDate: moment()
}

export default Pickers
