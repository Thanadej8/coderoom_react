import React from 'react'
import styled from '@emotion/styled'

import { useModalProps } from '@hooks'
import { PaperModal } from '@components/modals'
import StudentProfile from '@components/StudnetProfile'

const WrapperStudentProfile = styled.div`
  margin-top: 20px;
`

export default props => {
  const { isOpen, closeModal, id } = useModalProps('studentProfileModal')

  return (
    <PaperModal isOpen={isOpen} closeModal={closeModal}>
      <WrapperStudentProfile>
        <StudentProfile id={id} />
      </WrapperStudentProfile>
    </PaperModal>
  )
}
