import React from 'react'
import styled from '@emotion/styled'

import Button from '@components/Button'

import Modal from './Modal'

const Card = styled.div`
  width: 350px;
  padding: 15px;
  background-color: #fff;
`
const WrapperButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`

export default props => {
  const {
    isOpen,
    closeModal,
    children,
    handleSubmit,
    labelCancel = 'ยกเลิก',
    labelSubmit = 'ตกลง',
  } = props

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} shouldCloseOnOverlayClick>
      <Card>
        {children}
        <WrapperButtons>
          <Button onClick={closeModal}>{labelCancel}</Button>
          <Button type="danger" onClick={handleSubmit}>
            {labelSubmit}
          </Button>
        </WrapperButtons>
      </Card>
    </Modal>
  )
}
