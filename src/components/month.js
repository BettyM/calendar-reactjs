import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import RightIcon from '@material-ui/icons/KeyboardArrowRight'
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import Grid from '@material-ui/core/Grid'

const Month = ({
  currentMonth,
  currentYear,
  updateCurrentMonth,
  updateCurrentYear,
}) => {
  const month = moment().month(currentMonth).format('MMMM')
 
  const prevMonth = () => {
    const prev = moment().month(currentMonth-1).month()
    updateCurrentMonth(prev)
    if(prev === 11) {
      updateCurrentYear(currentYear - 1)
    }
  }

  const nextMonth = () => {
    const next = moment().month(currentMonth+1).month()
    updateCurrentMonth(next)
    if(next === 0) {
      updateCurrentYear(currentYear + 1)
    }
  }
  return (
    <div className="month row">
      <Grid container direction="row">
        <Grid item xs={2}>
          <LeftIcon onClick={prevMonth} />
        </Grid>
        <Grid item xs={8} className="grid-center">
          {month} {currentYear}
        </Grid>
        <Grid item xs={2} className="grid-right">
          <RightIcon onClick={nextMonth} />
        </Grid>
      </Grid>
    </div>
  )
}

Month.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  updateCurrentMonth: PropTypes.func,
  updateCurrentYear: PropTypes.func,
}

export default Month

