import PropTypes from 'prop-types'
import React from 'react'
import moment from 'moment'
import MomentUtils from '@date-io/moment'
import { GithubPicker } from 'react-color'
import Grid from '@material-ui/core/Grid'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker
} from 'material-ui-pickers'

const Pickers = ({
  onColorChange,
  onDateChange,
  selectedColor,
  selectedDate
}) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container className="modal-grid" justify="space-between"  alignItems="flex-start">
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
      <Grid container className="modal-grid" justify="flex-start">
        <GithubPicker
          color={selectedColor}
          onChange={color => onColorChange(color.hex)}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

Pickers.propTypes = {
  onColorChange: PropTypes.func,
  onDateChange: PropTypes.func,
  selectedColor: PropTypes.string,
  selectedDate: PropTypes.object,
}

Pickers.defaultProps = {
  selectedDate: moment()
}

export default Pickers
