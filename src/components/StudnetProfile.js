import React from 'react'
import styled from '@emotion/styled'

import image from '@assets/images/au.JPG'
import { Row, Col } from '@components/flex'
import LessonCard from '@components/LessonCard'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const WrapperNameStudnetCode = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
const Name = styled.p`
  font-size: 20px;
  color: ${props => props.theme.minorColor};
  font-weight: 400;
  ${props => props.theme.media('tablet')} {
    font-size: 24px;
  }
`
const StudentCode = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #dde1e3;
  ${props => props.theme.media('tablet')} {
    font-size: 18px;
  }
`
const WrapperCourse = styled.div`
  padding: 10px;
  background-color: #dde1e3;
`
const CourseTitle = styled.p`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  margin-bottom: 15px;
  ${props => props.theme.media('tablet')} {
    font-size: 18px;
  }
`
const WrapperLessons = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
`

export default props => {
  return (
    <Wrapper>
      <WrapperNameStudnetCode>
        <Name>Thanadej Phadtong</Name>
        <StudentCode>07570498</StudentCode>
      </WrapperNameStudnetCode>

      <WrapperCourse>
        <CourseTitle>Research Method Summer I</CourseTitle>
        <WrapperLessons>
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
        </WrapperLessons>
      </WrapperCourse>
    </Wrapper>
  )
}
