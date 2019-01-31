import PropTypes from 'prop-types'
import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const ReminderList = ({ reminders, onClick, onClickReminder }) => {
  const remindersList = reminders.map((data, i) => {
    const style = {
      backgroundColor: `${data.color}`,
      opacity: .75,
    }

    return (
      <div
        className="reminder-color"
        style={style}
        id="item"
        key={i}
        onClick={e => {
          onClickReminder(e, {data})
          onClick()
        }}
      >
        <ListItem key={i}>
          <ListItemText
            primary={data.reminder}
          />
        </ListItem>
      </div>
    )
  })

  return remindersList
}

ReminderList.propTypes = {
  onClick: PropTypes.func,
  onClickReminder: PropTypes.func,
  reminders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    date: PropTypes.string,
    reminder: PropTypes.string,
  }))
}

export default ReminderList
