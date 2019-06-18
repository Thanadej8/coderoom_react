import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { paths } from '@routers'
import ProgressBar from '@components/ProgressBar'
import { OvalButton } from '@components/buttons'
import Layout from '@components/MemberLayout'
import Tabs, { TabPane } from '@components/Tabs'
import { Authorized } from '@utils/ability'
import Inputs from '@components/Inputs'
import { Row, Col } from '@components/flex'
import AnnoucmentSection from './components/AnnoucementSection'
import LessonsSection from './components/LessonsSection'

const CouseTitle = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
`

const CourseCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;
  ${props => props.theme.media('tablet')} {
    padding: 10px 15px;
  }
`
const WrapperDetailBoxs = styled.div`
  display: flex;
  margin-bottom: 8px;
  ${props => props.theme.media('tablet')} {
    margin-bottom: 10px;
    flex-direction: row;
  }
`
const WrapperDetailBox = styled.div`
  width: 100%;
  /* margin-bottom: 5px; */
  padding: 0 5px;
  margin-bottom: 0px;
  &:nth-of-type(1) {
    padding-left: 0px;
  }
  &:nth-last-of-type(1) {
    padding-right: 0px;
  }
  ${props => props.theme.media('tablet')} {
    padding: 0 5px;
    margin-bottom: 0px;
    &:nth-of-type(1) {
      padding-left: 0px;
    }
    &:nth-last-of-type(1) {
      padding-right: 0px;
    }
  }
`
const DetailBox = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding: 5px 0;
  width: 100%;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 2.5px;
    &:nth-last-of-type(1) {
      margin-bottom: 0px;
    }
  }
  ${props => props.theme.media('tablet')} {
    font-size: 16px;
    padding: 10px;
    height: 80px;
  }
`
const WrapperProgressBar = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  ${props => props.theme.media('tablet')} {
  }
`
const CourseProgressBar = styled(ProgressBar)`
  width: 100%;
  ${props => props.theme.media('tablet')} {
    width: 400px;
  }
`
const WrapperCourseTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  ${props => props.theme.media('tablet')} {
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`
const WrapperViewMemberButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  ${props => props.theme.media('tablet')} {
    margin-top: 0px;
    display: block;
  }
`
const WrapperTabs = styled.div`
  margin-top: 1px;
`
const TabCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
`
const CourseCode = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  color: #969696;
  span {
    color: ${props => props.theme.primaryColor};
  }
`
const WrapperCourseCode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const ResetCourseCodeButton = styled(OvalButton)`
  width: 200px;
`
const ManagementRow = styled(Row)`
  flex-direction: row;
  margin-bottom: 10px;
  &:nth-last-of-type(1) {
    margin-bottom: 0px;
  }
  ${props => props.theme.media('tablet')} {
  }
`
const ManagementCol = styled(Col)`
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  &:nth-last-of-type(1) {
    justify-content: flex-start;
  }
  ${props => props.theme.media('tablet')} {
  }
`
const WrapperSelect = styled.div`
  width: 150px;
`

export default props => {
  const { courseName = 'Research Method Summer I' } = props

  return (
    <Layout>
      <CourseCard>
        <WrapperCourseTitle>
          <CouseTitle>{courseName}</CouseTitle>
          <WrapperViewMemberButton>
            <Link to={paths.courseMembers({ courseId: 1 })}>
              <OvalButton>View Members</OvalButton>
            </Link>
          </WrapperViewMemberButton>
        </WrapperCourseTitle>

        <WrapperProgressBar>
          <CourseProgressBar progress={20} />
        </WrapperProgressBar>

        <WrapperDetailBoxs>
          <WrapperDetailBox>
            <DetailBox>
              <p>1</p>
              <p>Lessons</p>
            </DetailBox>
          </WrapperDetailBox>

          <WrapperDetailBox>
            <DetailBox>
              <p>1</p>
              <p>Problems</p>
            </DetailBox>
          </WrapperDetailBox>

          <WrapperDetailBox>
            <DetailBox>
              <p>1</p>
              <p>Teachers</p>
            </DetailBox>
          </WrapperDetailBox>

          <WrapperDetailBox>
            <DetailBox>
              <p>1</p>
              <p>Students</p>
            </DetailBox>
          </WrapperDetailBox>
        </WrapperDetailBoxs>
        <WrapperDetailBoxs>
          <WrapperDetailBox>
            <DetailBox>
              <p>Mode</p>
              <p>Learning</p>
            </DetailBox>
          </WrapperDetailBox>

          <WrapperDetailBox>
            <DetailBox>
              <p>Course Status</p>
              <p>Active</p>
            </DetailBox>
          </WrapperDetailBox>
        </WrapperDetailBoxs>
      </CourseCard>
      <Authorized requiredRole="teacher">
        <WrapperTabs>
          <Tabs defaultActiveKey="courseCode">
            <TabPane tab="Course Code" key="courseCode">
              <TabCard>
                <WrapperCourseCode>
                  <CourseCode>
                    CODE: <span>6AB2SD</span>
                  </CourseCode>
                  <ResetCourseCodeButton type="danger">Reset Course Code</ResetCourseCodeButton>
                </WrapperCourseCode>
              </TabCard>
            </TabPane>
            <TabPane tab="Settings" key="settings">
              <TabCard>
                <ManagementRow>
                  <ManagementCol>Course Login</ManagementCol>
                  <ManagementCol>
                    <WrapperSelect>
                      <Inputs.Select
                        defaultValue={{ label: 'Enable', value: 'enable' }}
                        options={[
                          { label: 'Enable', value: 'enable' },
                          { label: 'Disable', value: 'disable' },
                        ]}
                      />
                    </WrapperSelect>
                  </ManagementCol>
                </ManagementRow>
                <ManagementRow>
                  <ManagementCol>Course Mode</ManagementCol>
                  <ManagementCol>
                    <WrapperSelect>
                      <Inputs.Select
                        defaultValue={{ label: 'Learning', value: 'learning' }}
                        options={[
                          { label: 'Learning', value: 'learning' },
                          { label: 'Exam', value: 'exam' },
                        ]}
                      />
                    </WrapperSelect>
                  </ManagementCol>
                </ManagementRow>
              </TabCard>
            </TabPane>
          </Tabs>
        </WrapperTabs>
      </Authorized>
      <AnnoucmentSection />
      <LessonsSection />
    </Layout>
  )
}
