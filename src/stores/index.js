import { combineReducers, createStore } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import app from './app'
import courses from './courses'

const reducers = combineReducers({
  app,
  courses,
  form: reduxFormReducer,
})

export default createStore(reducers)
