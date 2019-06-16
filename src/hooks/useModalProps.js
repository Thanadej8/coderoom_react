import { useCallback } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { closeModal } from '@stores/modals'

export default modelId => {
  const dispatch = useDispatch()
  const models = useSelector(state => state.models, shallowEqual)
  const model = models[modelId] || {}

  const onCloseModal = useCallback((modelProps = {}) => {
    dispatch(closeModal({ modelId, modelProps }))
  })

  return { ...model, closeModal: onCloseModal }
}
