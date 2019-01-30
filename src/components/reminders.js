import PropTypes from 'prop-types'
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Reminders = ({ onClickReminder, reminders }) => {
  //TODO: sort reminders by date

  const reminderList = reminders.map(( data, i ) => {
    return (
      <div className="reminder-color" key={i}>
        <ListItem key={i}>
          <ListItemText
            primary={data.reminder}
          />
        </ListItem>
      </div>
    )
  })

  return (
    <div className="reminders-section">
      <div className="reminder">
        <List dense={true}>
          {reminderList}
        </List>
      </div>
    </div>
  )
}

Reminders.propTypes = {
  onClickReminder: PropTypes.func,
  reminders: PropTypes.arrayOf(PropTypes.shape(
    { 
      date: PropTypes.string,
      reminder: PropTypes.string,
    }
  )),
}

Reminders.defaultProps = {
  reminders: [],
}

export default Reminders
