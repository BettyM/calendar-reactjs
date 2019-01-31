import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Reminders = ({ onClickReminder, reminders }) => {
  if(reminders.length > 0) {
    reminders = _.orderBy(reminders, ['date'],['asc'])
    const reminderList = reminders.map(( data, i ) => {
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
          onClick={e => onClickReminder(e, {data})}>
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
