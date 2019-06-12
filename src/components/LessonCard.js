import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from '@components/ProgressBar'

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px;
  color: #000;
`
const CourseMode = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: #000;
`
const CourseName = styled.p`
  font-size: 16px;
  height: 50px;
`

export default props => {
  return (
    <Wrapper>
      <CourseMode>Lesson Mode : Learning</CourseMode>
      <CourseName>การใช้ TreeMap, HashMap</CourseName>
      <ProgressBar name="Lesson" persent={20} />
    </Wrapper>
  )
}
