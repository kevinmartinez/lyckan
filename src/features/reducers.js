import { combineReducers } from 'redux'
import test from './test/reducer'
import cat from './cat/reducer'

const reducers = combineReducers({
  test,
  cat
})

export default reducers
