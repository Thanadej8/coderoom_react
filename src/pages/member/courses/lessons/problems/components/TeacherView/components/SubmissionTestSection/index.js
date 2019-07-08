import React, { useCallback, useState } from 'react'
import styled from '@emotion/styled'

import { PaperModal } from '@components/modals'
import { useModalProps, useModalHandlers } from '@hooks'
import ProblemResult from '@components/ProblemResult.js'

import Form from './Form'

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  color: #000;
  margin-bottom: 10px;
`

const ProblemResultModal = props => {
  const { isOpen, closeModal } = useModalProps('problemResultModal')
  return (
    <PaperModal isOpen={isOpen} closeModal={closeModal}>
      <ProblemResult />
    </PaperModal>
  )
}

export default props => {
  const { openModal } = useModalHandlers('problemResultModal')
  const handleSubmit = useCallback(async values => {
    console.log('handleSubmit', values)
  }, [])

  return (
    <>
      <Title>ตรวจโจทย์</Title>
      <Form onSubmit={handleSubmit} />
      <ProblemResultModal />
    </>
  )
}
