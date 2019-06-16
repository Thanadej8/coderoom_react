import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { openModal, closeModal } from '@stores/modals'

export default modelId => {
  const dispatch = useDispatch()
  const onOpenModal = useCallback((modelProps = {}) => {
    dispatch(openModal({ modelId, modelProps }))
  })

  const onCloseModal = useCallback((modelProps = {}) => {
    dispatch(closeModal({ modelId, modelProps }))
  })

  return { openModal: onOpenModal, closeModal: onCloseModal }
}
