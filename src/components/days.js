import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import Reminders from './reminders'

const Days = ({
  month,
  onClick,
  reminders,
  year
}) => {
  const monthStart = moment([year, month]).startOf('month')
  const monthEnd = moment([year, month]).endOf('month')
  const startDate = moment(monthStart).startOf('week')
  const endDate = moment(monthEnd).startOf('week')

  let date
  let dateString
  let days = []
  const rows = []

  let day = startDate
  while (day <= endDate) {
    for (let i = 0; i < 7 ; i++) {
      const remindersList = []
      date = moment(day).format("D")
      dateString = moment(day).format()

      // Get reminders of day
      if(reminders.length > 0) {
        let reminderDate = ""
        for (let r = 0; r < reminders.length; r++) {
          reminderDate = moment(reminders[r].date).startOf('day').format()
          if( dateString === reminderDate) {
            remindersList.push(reminders[r])
          }
        }
      }

      days.push(
        <div
          className="col cell"
          id={dateString}
          onClick={e => onClick(e)}
          key={day}>
          <span className="number">{date}</span>
          <Reminders
            onClickReminder={onClick}
            reminders={remindersList}
          />
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
  onClick: PropTypes.func,
  reminders: PropTypes.arrayOf(PropTypes.shape(
    { 
      id: PropTypes.number,
      color: PropTypes.string,
      date: PropTypes.string,
      reminder: PropTypes.string,
    }
  )),
  year: PropTypes.number,
}

Days.defaultProps = {
  month: moment().month(),
  reminders: [],
  year: moment().year(),
}

export default Days
