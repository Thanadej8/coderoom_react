import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

import Modal from './Modal'
import Icon from '@components/Icon'

const className = css`
  @keyframes bottomSlide {
    from {
      top: ${window.innerHeight}px;
    }
    to {
      top: 0px;
    }
  }

  animation: bottomSlide 0.4s;
  padding: 10px;
  position: unset;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
  margin-right: 0;

  @media (min-width: 768px) {
    position: absolute;
    padding: 20px 0;
    top: 0;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0%);
  }
`
const overlayClassName = css`
  overflow-y: auto;
`
const Paper = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 600px;
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
      shouldCloseOnOverlayClick={true}
    >
      <Paper>
        <WrapperCloseIcon>
          <CloseIcon name="times" onClick={() => closeModal()} />
        </WrapperCloseIcon>
        {children}
      </Paper>
    </Modal>
  )
}
