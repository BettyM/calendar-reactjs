import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './store/reducers'
import Calendar from './components/container'
import './styles/index.css'

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store} render>
        <Calendar />
      </Provider>
    )
  }
}

export default App
