import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

import Modal from './Modal'
import Icon from '@components/Icon'

const className = css`
  position: unset;
  margin: 0px;
  padding: 30px 0;
  display: flex;
  justify-content: center;
  transform: unset;
`

const overlayClassName = css``

const Paper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 650px;
  position: relative;
`
const WrapperCloseIcon = styled.div`
  position: absolute;
  right: 20px;
`
const CloseIcon = styled(Icon)`
  color: #000;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export default props => {
  const { isOpen, closeModal, children } = props
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={className}
      overlayClassName={overlayClassName}
    >
      <Paper>
        <WrapperCloseIcon>
          <CloseIcon name="times-solid" onClick={() => closeModal()} />
        </WrapperCloseIcon>
        {children}
      </Paper>
    </Modal>
  )
}
