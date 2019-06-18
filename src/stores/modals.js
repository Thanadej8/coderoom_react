import { createAction, handleActions } from 'redux-actions'

export const openModal = createAction('OPEN_MODAL')
export const closeModal = createAction('CLOSE_MODAL')

export default handleActions(
  new Map([
    [
      openModal,
      (state, action) => {
        const { modalId, modelProps } = action.payload
        return { ...state, [modalId]: { isOpen: true, ...modelProps } }
      },
    ],
    [
      closeModal,
      (state, action) => {
        const { modalId } = action.payload
        return { ...state, [modalId]: { isOpen: false } }
      },
    ],
  ]),
  {},
)
