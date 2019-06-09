import React from 'react'
import ReactModal from 'react-modal'
import { css } from 'emotion'

const defaultClassName = css`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: none;
  border-radius: 0;
  border: 0;
  padding: 0;
`
const defaultOverlayModalClassName = css`
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`

export default props => {
  const {
    isOpen,
    children,
    closeModal,
    className = '',
    overlayClassName = '',
    shouldCloseOnOverlayClick = false,
  } = props
  return (
    <ReactModal
      isOpen={isOpen}
      closeModal={closeModal}
      className={`${defaultClassName} ${className}`}
      overlayClassName={`${defaultOverlayModalClassName} ${overlayClassName}`}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      ariaHideApp={false}
      shouldFocusAfterRender={false}
    >
      {children}
    </ReactModal>
  )
}
