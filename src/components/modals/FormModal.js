import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'

import PageTitle from '@components/PageTitle'
import Icon from '@components/Icon'

import Modal from './Modal'

const className = css`
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

const FormCard = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  ${props => props.theme.media('tablet')} {
    width: 500px;
  }
`
const Title = styled(PageTitle)`
  font-size: 20px;
`

const CloseIcon = styled(Icon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #000;
  cursor: pointer;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`

export default props => {
  const { isOpen, closeModal, title, children, classFormCard } = props
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={className}
      overlayClassName={overlayClassName}
      shouldCloseOnOverlayClick={true}
    >
      <FormCard className={classFormCard}>
        <CloseIcon name="times" onClick={() => closeModal()} />
        <Title>{title}</Title>
        {children}
      </FormCard>
    </Modal>
  )
}
