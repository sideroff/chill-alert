import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'

import { TopLevelNavigator } from './components'
import navigation from './services/navigation'

import store from './store.js'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TopLevelNavigator navigatio={navigationRef => navigation.initialize(navigationRef)} />
      </Provider>
    )
  }
}