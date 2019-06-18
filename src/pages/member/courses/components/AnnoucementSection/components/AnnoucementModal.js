import React from 'react'
import styled from '@emotion/styled'

import { PaperModal } from '@components/modals'
import PageTitle from '@components/PageTitle'
import { useModalProps } from '@hooks'

const Title = styled(PageTitle)`
  font-size: 20px;
`

export default props => {
  const { isOpen, closeModal, title } = useModalProps('viewAnnoucementModal')
  return (
    <PaperModal isOpen={isOpen} closeModal={closeModal}>
      <Title>{title}</Title>
    </PaperModal>
  )
}
