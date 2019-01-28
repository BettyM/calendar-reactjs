import React from 'react'
import moment from 'moment'

const Weekdays = () => {
  const weekdays = moment.weekdays()
  const days = []
  weekdays.forEach( (day, i) => {
    days.push(
      <div className="col col-center" key={i}>
        {day}
      </div>
    )
  })

  return <div className="days row">{days}</div>
}

export default Weekdays

