import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { openModal, closeModal } from '@stores/modals'

export default modalId => {
  const dispatch = useDispatch()
  const onOpenModal = useCallback((modelProps = {}) => {
    dispatch(openModal({ modalId, modelProps }))
  })

  const onCloseModal = useCallback(() => {
    dispatch(closeModal({ modalId }))
  })

  return { openModal: onOpenModal, closeModal: onCloseModal }
}
