import { createAction, handleActions } from 'redux-actions'

import { removeAuthToken } from '@utils/session'
import Http from '@utils/api'

export const logout = createAction('LOGOUT')
export const fetchCurrentUser = createAction('FETCH_CURRENT_USER')

export default handleActions(
  new Map([
    [
      fetchCurrentUser,
      (state, action) => {
        return { currentUser: { name: 'Thanadej Phadtong' } }
      },
    ],
    [
      logout,
      (state, action) => {
        removeAuthToken()
        return { currentUser: null }
      },
    ],
  ]),
  { currentUser: null },
)
