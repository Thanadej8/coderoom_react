import { createAction, handleActions } from 'redux-actions'

export const fetchCurrentUser = createAction('FETCH_CURRENT_USER')

export default handleActions(
  new Map([
    [
      fetchCurrentUser,
      (state, action) => {
        console.log('state', state)
        console.log('action', action)
        return { currentUser: { name: 'Thanadej Phadtong' } }
      },
    ],
  ]),
  { currentUser: null },
)
