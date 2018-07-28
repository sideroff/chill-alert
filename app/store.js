import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'


let _instance = null

function configureInstnace(defaultState) {
  const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
  const enhancer = compose(applyMiddleware(thunk, loggerMiddleware))

  return createStore(rootReducer, defaultState, enhancer)
}

function getInstnace() {
  if (!_instance) {
    _instance = configureInstnace({})
  }

  return _instance
}

export default getInstnace()
