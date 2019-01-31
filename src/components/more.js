import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import List from './reminderList'

export default class More extends Component {
  constructor() {
    super()
    this.state = {
      showMore: false,
    }
  }

  onClickMore = e => {
    this.setState({ showMore: true })
  }

  onClose = () => {
    this.setState({ showMore: false })
  }

  render() {
    const { reminders, onClickReminder } = this.props

    const remindersOrder = _.orderBy(reminders, ['date'],['asc'])
    const moreText = `${reminders.length-2} more`

    const list = (
      <Dialog
        onClose={this.onClose}
        open={this.state.showMore}
      >
        <div className="modal-main">
          <List
            reminders={remindersOrder}
            onClickReminder={onClickReminder}
            onClick={this.onClose}
          />
        </div>
      </Dialog>
    )

    return (
      <div>
        <div
          className="reminder-color"
          onClick={e => this.onClickMore(e)}>
            <ListItem>
              <ListItemText
                primary={moreText}
              />
            </ListItem>
        </div>
        {list}
      </div>
    )
  }
}

More.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    color: PropTypes.string,
    date: PropTypes.string,
    reminder: PropTypes.string,
  })),
  onClickReminder: PropTypes.func,
}
