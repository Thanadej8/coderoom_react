import React, { useCallback, useEffect } from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

import { Modal } from '@components/modals'
import { useModalProps } from '@hooks'
import ProblemResult from '@components/ProblemResult'

const className = css`
  /* padding: 10px; */
  position: unset;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
  margin-right: 0;
  @media (min-width: 768px) {
    /* position: absolute;
    padding: 20px 0;
    top: 0;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0%); */
  }
`
const overlayClassName = css`
  background-color: rgba(0, 0, 0, 0.5);
`

const ProblemNav = styled.div`
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  padding-top: 60px;
`
const WrapperProblemDetail = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 220px);
  max-height: 100vh;
  padding: 80px 20px 20px 20px;
  overflow-y: auto;
  z-index: 0;
`
const ProblemDetail = styled.div`
  width: 650px;
  margin: auto;
`

export default props => {
  const { isOpen, closeModal } = useModalProps('problemDetailModal')

  const handleMouseClick = useCallback(event => {
    const id = event.target.id
    const clickProfile = typeof id === 'string' && id === 'problemDetail'
    if (clickProfile) {
      closeModal()
    }
  }, [])

  useEffect(() => {
    window && window.addEventListener('click', handleMouseClick)

    return () => {
      window && window.removeEventListener('click', handleMouseClick)
    }
  })

  if (!isOpen) return null

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      className={className}
      overlayClassName={overlayClassName}
      shouldCloseOnOverlayClick={true}
    >
      <ProblemNav>aaaaa</ProblemNav>
      <WrapperProblemDetail id="problemDetail">
        <ProblemDetail>
          <ProblemResult />
        </ProblemDetail>
      </WrapperProblemDetail>
    </Modal>
  )
}
