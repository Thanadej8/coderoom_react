import { useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { closeModal } from '@stores/modals'

export default modalId => {
  const dispatch = useDispatch()
  const models = useSelector(state => state.models, shallowEqual)
  const model = models[modalId] || {}

  const onCloseModal = useCallback((modelProps = {}) => {
    dispatch(closeModal({ modalId, modelProps }))
  })

  return { ...model, closeModal: onCloseModal }
}
