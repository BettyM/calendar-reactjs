import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import List from '@material-ui/core/List'
import More from './more'
import ReminderList from './reminderList'

const Reminders = ({ onClickReminder, reminders }) => {
  if(reminders.length > 0) {
    reminders = _.orderBy(reminders, ['date'],['asc'])

    const reminderList = (
        <ReminderList
          reminders={reminders.slice(0,2)}
          onClickReminder={onClickReminder}
        />
      )
    
    const isBigger = !!(reminders.length > 2)
    return (
      <div className="reminders-section">
        <div className="reminder">
          <List dense={true}>
            {reminderList}
            {isBigger && (
              <More
                reminders={reminders}
                onClickReminder={onClickReminder}
              />)}
          </List>
        </div>
      </div>
    )
  }

  return null

}

Reminders.propTypes = {
  onClickReminder: PropTypes.func,
  reminders: PropTypes.arrayOf(PropTypes.shape(
    { 
      id: PropTypes.number,
      color: PropTypes.string,
      date: PropTypes.string,
      reminder: PropTypes.string,
    }
  )),
}

Reminders.defaultProps = {
  reminders: [],
}

export default Reminders
