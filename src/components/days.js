import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import Reminders from './reminders'

const Days = ({ month, onClickDay, reminders }) => {
  const monthStart = moment().month(month).startOf('month')
  const monthEnd = moment().month(month).endOf('month')
  const startDate = moment(monthStart).startOf('week')
  const endDate = moment(monthEnd).startOf('week')
  
  let date
  let days = []
  const rows = []

  let day = startDate
  let dateString
  while (day <= endDate) {
    for (let i = 0; i < 7 ; i++) {
      const remindersList = []
      date = moment(day).format("D")
      dateString = moment(day).format()

      // Get reminders of day
      if(reminders.length > 0) {
        for (let r = 0; r < reminders.length; r++) {
          if( dateString === reminders[r].date) {
            remindersList.push(reminders[r])
          }
        }
      }

      days.push(
        <div
          className="col cell"
          id={dateString}
          onClick={e => onClickDay(e.target)}
          key={day}>
          <span className="number">{date}</span>
          <Reminders reminders={remindersList} />
        </div>
      )
      day = moment(day).add(1, 'days')
    }

    rows.push(
      <div className="row" key={day}>
        {days}
      </div>
    )
    days = []
  }

  return <div className="body">{rows}</div>
}

Days.propTypes = {
  month: PropTypes.number,
  onClickDay: PropTypes.func,
  reminders: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    reminder: PropTypes.string,
  })),
}

Days.defaultProps = {
  month: moment().month(),
  reminders: [],
}

export default Days
