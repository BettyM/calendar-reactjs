import React, { Component } from 'react'
import moment from 'moment'
import WeekdaysSection from './weekdays'
import DaysSection from './days'

export default class Calendar extends Component {
  constructor() {
    super()
    this.state = {
      currentMonth: moment().month(),
    }
  }

  render() {
    const { currentMonth } = this.state
    return (
      <div className="calendar">
        <WeekdaysSection />
        <DaysSection month={currentMonth} />
      </div>
    )
  }
}
