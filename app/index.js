import React, { Component } from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase'
import { PersistGate } from 'redux-persist/integration/react'


import { TopLevelNavigator, SplashScreen } from './components'
import navigation from './services/navigation'
import store from './store.js'

export default class App extends Component {

  componentDidMount() {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDjym-0uqo2xQUFCvbj9lJ7S5eZVbYGGPE",
      authDomain: "chillalert-7c3c4.firebaseapp.com",
      databaseURL: "https://chillalert-7c3c4.firebaseio.com",
      projectId: "chillalert-7c3c4",
      storageBucket: "",
      messagingSenderId: "450699994606"
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={store.instance}>
        <PersistGate loading={<SplashScreen />} persistor={store.persistor}>
          <TopLevelNavigator navigatio={navigationRef => navigation.initialize(navigationRef)} />
        </PersistGate>
      </Provider>
    )
  }
}