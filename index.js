import React from 'react'
import { AppRegistry } from 'react-native'

import App from './app/index'
import { name as appName } from './app.json'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

AppRegistry.registerComponent(appName, () => App)