import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

let _instance = null
let _persistor = null

const persistConfig = {
  key: 'root',
  storage
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

function configureInstnace(defaultState) {
  const loggerMiddleware = createLogger({ predicate: () => __DEV__ })
  const enhancer = compose(applyMiddleware(thunk, loggerMiddleware))

  return createStore(persistedRootReducer, defaultState, enhancer)
}

function getInstance() {
  if (!_instance) {
    _instance = configureInstnace({})
    _persistor = persistStore(_instance)
  }

  return {
    instance: _instance,
    persistor: _persistor
  }
}

export default getInstance()