import React from 'react'
import styled from '@emotion/styled'

import ProgressBar from '@components/ProgressBar'
import Layout from '../components/Layout'

const CouseTitle = styled.h2`
  font-weight: 300;
  color: ${props => props.theme.minorColor};
`

const CourseCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export default props => {
  const { courseName = 'Research Method Summer I' } = props
  return (
    <Layout>
      <CouseTitle>{courseName}</CouseTitle>
      <CourseCard>
        <ProgressBar progress={20} />
      </CourseCard>
    </Layout>
  )
}
