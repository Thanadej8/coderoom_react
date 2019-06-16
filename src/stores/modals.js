import { createAction, handleActions } from 'redux-actions'

export const openModal = createAction('OPEN_MODAL')
export const closeModal = createAction('CLOSE_MODAL')

export default handleActions(
  new Map([
    [
      openModal,
      (state, action) => {
        const { modelId, modelProps } = action.payload
        return { ...state, [modelId]: { isOpen: true, ...modelProps } }
      },
    ],
    [
      closeModal,
      (state, action) => {
        const { modelId } = action.payload
        return { ...state, [modelId]: { isOpen: false } }
      },
    ],
  ]),
  {},
)
