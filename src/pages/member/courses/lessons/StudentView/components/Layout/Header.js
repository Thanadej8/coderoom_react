import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { paths } from '@routers'
import { OvalButton } from '@components/buttons'
import { Profile, Header, Logo } from '@components/MemberLayout/Header'
import { useModalHandlers, useModalProps } from '@hooks'
import Icon from '@components/Icon'

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
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  align-content: center;
  align-items: center;
`
const ProblemName = styled.p`
  font-size: 20px;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
`
const BackToLessonsLink = styled(Link)`
  display: flex;
  align-content: center;
  align-items: center;
`
const AngleRightIcon = styled(Icon)`
  /* rotate:  */
  transform: rotate(180deg);
  margin-right: 10px;
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
      <BackToLessonsLink to={paths.courseDashboardLessons({ courseId: 1 })}>
        {/* <AngleRightIcon name="angle-right" /> */}
        Research Method Summer I
      </BackToLessonsLink>
      <Profile />
    </CustomHeader>
  )
}
