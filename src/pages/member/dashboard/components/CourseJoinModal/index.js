import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import { AlertModal } from '@components/modals'
import { useModalProps } from '@hooks'

import Form from './Form'

export default props => {
  const { isOpen, closeModal } = useModalProps('courseJoinModal')
  const handleSubmit = useCallback(async values => {
    // const response = await Http.get()
    console.log('handleSubmit', values)
  }, [])
  return (
    <AlertModal isOpen={isOpen} closeModal={closeModal} disabledButton title="Joins Course">
      <Form onSubmit={handleSubmit} />
    </AlertModal>
  )
}
