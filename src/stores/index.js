import { combineReducers, createStore } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import app from './app'
import courses from './courses'
import models from './modals'

const reducers = combineReducers({
  form: reduxFormReducer,
  app,
  courses,
  models,
})

export default createStore(reducers)
