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
  z-index: 999999;
`
const WrapperHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`

const WrapperHamberger = styled.div`
  margin-right: 8px;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const Problem = styled.div`
  cursor: pointer;
  background-color: #f1f1f1;
  padding: 8px 15px;
  border-radius: 25px;
  display: flex;
  align-content: center;
  align-items: center;
`
const ProblemName = styled.p`
  font-size: 18px;
  line-height: 16px;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
`
const BackToLessonsLink = styled(Link)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
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
      <WrapperHeader>
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
      </WrapperHeader>
    </CustomHeader>
  )
}
