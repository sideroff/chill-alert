import { TESTING } from './constants'

export const testAction = testData => dispatch => {

  dispatch(testing(true))

  setTimeout(() => {
    dispatch(testAction(false))
  }, 2000)
}

const testing = testData => ({ type: TESTING, payload: testData })