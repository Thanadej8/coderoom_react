import React, { useCallback, useEffect } from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { Tooltip } from 'antd'

import { Modal } from '@components/modals'
import { useModalProps } from '@hooks'
import ProblemResult from '@components/ProblemResult'

const className = css`
  position: unset;
  top: 0;
  left: 0;
  transform: translate(0%, 0%);
  margin-right: 0;
  @media (min-width: 768px) {
  }
`
const overlayClassName = css`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
`

const tooltipClassName = css`
  z-index: 9999999;
`

const ProblemNav = styled.div`
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding-top: 60px;
  padding: 61px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`
const Problem = styled.div`
  padding: 15px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  &:hover {
    background-color: #f1f1f1;
  }
`
const ProblemName = styled.p`
  width: calc(100% - 70px);
  color: ${props => (props.active ? props.theme.primaryColor : '#000')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const HighLightProblem = styled.div`
  width: 5px;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColor};
  right: -5px;
  top: 0;
`
const CorrectProblemText = styled.p`
  padding: 5px 8px;
  width: 60px;
  background-color: #3eebc1;
  border-radius: 5px;
  color: #fff;
`

const WrapperProblemDetail = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 300px);
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
      <ProblemNav>
        <Tooltip placement="right" title="1.TreeMap" overlayClassName={tooltipClassName}>
          <Problem active={false}>
            <ProblemName>1.TreeMap</ProblemName>
          </Problem>
        </Tooltip>
        <Tooltip placement="right" title="2.Leebo" overlayClassName={tooltipClassName}>
          <Problem active={true}>
            <ProblemName>2.Leebo</ProblemName>

            <CorrectProblemText>Correct</CorrectProblemText>
            <HighLightProblem />
          </Problem>
        </Tooltip>
        <Tooltip
          placement="right"
          title="3.Test Word Problem Na Ja asdfasdf sadfasdfa sdfadsf asdfsa fadsfasfas"
          overlayClassName={tooltipClassName}
        >
          <Problem>
            <ProblemName>
              3.Test Word Problem Na Ja asdfasdf sadfasdfa sdfadsf asdfsa fadsfasfas
            </ProblemName>
            <CorrectProblemText>Correct</CorrectProblemText>
          </Problem>
        </Tooltip>
      </ProblemNav>
      <WrapperProblemDetail id="problemDetail">
        <ProblemDetail>
          <ProblemResult />
        </ProblemDetail>
      </WrapperProblemDetail>
    </Modal>
  )
}
