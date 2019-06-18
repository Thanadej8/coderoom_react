import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { useTitlePage } from '@hooks'
import { paths } from '@routers'
import CourseCard from '@components/CourseCard'
import Layout from '@components/MemberLayout'
import PageTitle from '@components/PageTitle'

import CourseJoinModal from './components/CourseJoinModal'

const Title = styled(PageTitle)`
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: center;
  ${props => props.theme.media('tablet')} {
    margin-bottom: 20px;
  }
`

const WrapperCourses = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px 10px;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
  ${props => props.theme.media('large-tablet')} {
    grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
  }
`
const CourseLink = styled(Link)`
  cursor: pointer;
`

export default props => {
  useTitlePage('Dashboard')

  return (
    <Layout>
      <Title>Courses</Title>
      <WrapperCourses>
        <CourseLink to={paths.memberCourses({ courseId: 1 })}>
          <CourseCard />
        </CourseLink>
        <CourseLink to={paths.memberCourses({ courseId: 1 })}>
          <CourseCard />
        </CourseLink>

        <CourseLink to={paths.memberCourses({ courseId: 1 })}>
          <CourseCard />
        </CourseLink>

        <CourseLink to={paths.memberCourses({ courseId: 1 })}>
          <CourseCard />
        </CourseLink>

        <CourseLink to={paths.memberCourses({ courseId: 1 })}>
          <CourseCard />
        </CourseLink>
      </WrapperCourses>
      <Title>More Courses</Title>
      <WrapperCourses>
        <CourseCard isMoreCourse />
        <CourseCard isMoreCourse />
      </WrapperCourses>
      <CourseJoinModal />
    </Layout>
  )
}
