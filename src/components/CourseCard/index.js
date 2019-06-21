import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import ProgressBar from '@components/ProgressBar'
import { OvalButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'

import Form from './Form'

const Wrapper = styled.div`
  width: 100%;
  opacity: ${props => (props.disableCourse ? '0.6' : '1')};
  cursor: ${props => (props.disableCourse ? 'not-allowed' : 'default')};
  /* filp */
  perspective: 500px;
  position: relative;
  background-color: #fff;
  padding: 10px;
  /* end filp */
  ${props => props.theme.media('computer')} {
    background-color: unset;
    padding: 0px;
    height: ${props => (props.isMoreCourse ? '200px' : '250px')};
  }
`
const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${props => props.theme.media('computer')} {
    padding: 0px;
    /* filp */
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
    transition-delay: 0.1s;
    &:hover {
      /* filp */
      transform: ${props => (props.isMoreCourse ? 'rotateY(-180deg)' : 'rotateY(0deg)')};
    }
  }
`

const Side = styled.div`
  background-color: unset;
  ${props => props.theme.media('computer')} {
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    backface-visibility: hidden;
    &:nth-last-of-type(1) {
      transform: rotateY(180deg);
    }
  }
`

const ExamMode = styled.div`
  top: 4px;
  left: -5px;
  color: #fff;
  background-color: #004245;
  position: absolute;
  font-size: 12px;
  padding: 4px 8px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 6px 0px;
  opacity: 0.8;
`

const FrontView = styled(Side)`
  display: flex;
  flex-direction: column;
  ${props => props.theme.media('computer')} {
    justify-content: space-between;
  }
`
const CourseTitle = styled.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #000;
  margin-bottom: 15px;
  ${props => props.theme.media('computer')} {
    margin-bottom: 0px;
  }
`
const BackTitle = styled(CourseTitle)`
  display: none;
  ${props => props.theme.media('computer')} {
    display: block;
    z-index: 1;
  }
`
const BackView = styled(Side)`
  background-color: unset;
  padding: 0;
  display: ${props => (props.isMoreCourse ? 'block' : 'none')};
`

const WrapperInformation = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  grid-gap: 10px 10px;
  margin-bottom: 20px;
  ${props => props.theme.media('tablet')} {
    margin-bottom: 0px;
  }
`
const InfoBox = styled.div`
  font-size: 16px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
`
const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  ${props => props.theme.media('computer')} {
    height: calc(100% - 40px);
  }
`

export default props => {
  const { className, isMoreCourse = false, hasExam = false, disableCourse = false } = props

  const alertModel = useModalHandlers('alertModal')

  const handleSubmit = useCallback(async values => {
    // const response = await Http.get()
    console.log('handleSubmit', values)
  }, [])

  return (
    <Wrapper className={className} isMoreCourse={isMoreCourse} disableCourse={disableCourse}>
      {!isMoreCourse && hasExam && <ExamMode>Exam</ExamMode>}
      <Card isMoreCourse={isMoreCourse}>
        <FrontView>
          <CourseTitle>Research Method Summer II</CourseTitle>
          <WrapperInformation>
            <InfoBox>
              <p>4</p>
              <p>Lessons</p>
            </InfoBox>
            <InfoBox>
              <p>4</p>
              <p>Problems</p>
            </InfoBox>
            <InfoBox>
              <p>4</p>
              <p>Teachers</p>
            </InfoBox>
            <InfoBox>
              <p>4</p>
              <p>Students</p>
            </InfoBox>
          </WrapperInformation>
          {!isMoreCourse && <ProgressBar progress={20} />}
        </FrontView>
        <BackView isMoreCourse={isMoreCourse}>
          <BackTitle>Research Method Summer I</BackTitle>
          <WrapperButtons>
            <OvalButton
              type="primary"
              onClick={() => {
                alertModel.openModal({
                  title: 'Join Course',
                  disabledButton: true,
                  render: <Form onSubmit={handleSubmit} />,
                })
              }}
            >
              Join
            </OvalButton>
          </WrapperButtons>
        </BackView>
      </Card>
    </Wrapper>
  )
}
