import { createAction, handleActions } from 'redux-actions'

export const fetchCourses = createAction('FETCH_COURSES')

export default handleActions(
  new Map([
    [
      fetchCourses,
      (state, action) => {
        console.log('state', state)
        console.log('action', action)
        return { all: [{}, {}, {}] }
      },
    ],
  ]),
  { all: [], more_courses: [] },
)
