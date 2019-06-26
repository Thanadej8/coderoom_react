import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { paths } from '@routers'
import { OvalButton } from '@components/buttons'
import { Profile, Header, Logo } from '@components/MemberLayout/Header'
import { useModalHandlers, useModalProps } from '@hooks'

import Hamberger from './Hamberger'

const CustomHeader = styled(Header)`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  z-index: 999999;
`
const WrapperHamberger = styled.div`
  margin-right: 10px;
`
const Problem = styled.div`
  cursor: pointer;
  display: flex;
  align-content: center;
  align-items: center;
`
const ProblemName = styled.p`
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
  font-weight: 500;
`

export default props => {
  const { isOpen } = useModalProps('problemDetailModal')
  const { openModal, closeModal } = useModalHandlers('problemDetailModal')

  const handleProblemClick = useCallback(() => {
    isOpen ? closeModal() : openModal({})
  }, [isOpen])

  return (
    <CustomHeader>
      <Problem onClick={handleProblemClick}>
        <WrapperHamberger>
          <Hamberger isOpen={isOpen} />
        </WrapperHamberger>
        <ProblemName>1.Labor</ProblemName>
      </Problem>

      <Profile />
    </CustomHeader>
  )
}
