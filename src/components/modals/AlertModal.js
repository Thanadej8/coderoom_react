import React from 'react'
import styled from '@emotion/styled'

import { AntdButton } from '@components/buttons'
import Icon from '@components/Icon'
import Modal from './Modal'

const Card = styled.div`
  width: 100%;
  background-color: #fff;
  ${props => props.theme.media('tablet')} {
    width: 350px;
  }
`
const WrapperButtons = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`
const Header = styled.div`
  width: 100%;
  border: 1px solid #f1f1f1;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
const CardTitle = styled.p`
  font-weight: 300;
  font-size: 18px;
`
const CloseIcon = styled(Icon)`
  font-size: 12px;
  color: #969696;
  cursor: pointer;
`
const Body = styled.div`
  padding: 10px;
`

export default props => {
  const {
    isOpen,
    closeModal,
    children,
    handleSubmit,
    title = '',
    labelSubmit = 'Submit',
    disabledButton = false,
  } = props

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      shouldCloseOnOverlayClick
      disabledButton={disabledButton}
    >
      <Card>
        <Header>
          <CardTitle>{title}</CardTitle>
          <CloseIcon name="times" onClick={() => closeModal()} />
        </Header>
        <Body>
          {children}
          {!disabledButton && (
            <WrapperButtons>
              <AntdButton type="danger" onClick={handleSubmit}>
                {labelSubmit}
              </AntdButton>
            </WrapperButtons>
          )}
        </Body>
      </Card>
    </Modal>
  )
}
