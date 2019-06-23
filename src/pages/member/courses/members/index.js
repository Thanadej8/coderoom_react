import React from 'react'
import styled from '@emotion/styled'

import { AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'
import Layout from '@components/MemberLayout'
import ActionTopic from '@components/ActionsTopic'
import AddTeacherCouseFormModal from './components/AddTeacherCourseFormModal'
import AddStrudentCourseFormModal from './components/AddStrudentCourseFormModal'
import image from '@assets/images/au.JPG'
import Tabs, { TabPane } from '@components/Tabs'
import { Authorized } from '@utils/ability'
import ProfileImage from '@components/ProfileImage'

import ProgressTable from './components/ProgressTable'
import StudentProfileModal from './components/StudentProfileModal'
import Management from './components/teachers/Management'
import Progressed from './components/teachers/Progressed'

const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperTeachers = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px 10px;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
  }
  ${props => props.theme.media('large-tablet')} {
  }
`
const TeacherCard = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 10px;
`
const WrapperTeacherImage = styled.div`
  display: flex;
  justify-content: center;
`
const TeacherName = styled.p`
  color: #000;
  font-size: 16px;
  text-align: center;
  padding: 10px 0 0 0;
`

export default props => {
  const addTeacherCouseFormModal = useModalHandlers('addTeacherCouseFormModal')
  const addStrudentsCourseModal = useModalHandlers('addStrudentsCourseModal')

  return (
    <Layout>
      <ActionTopic name="Teachers">
        <WrapperActionButton>
          <AddCircleButton
            onClick={() => {
              addTeacherCouseFormModal.openModal({
                teachers: [],
              })
            }}
          />
        </WrapperActionButton>
      </ActionTopic>
      <WrapperTeachers>
        <TeacherCard>
          <WrapperTeacherImage>
            <ProfileImage />
          </WrapperTeacherImage>
          <TeacherName>ธนเดช พัดทอง</TeacherName>
        </TeacherCard>
        <TeacherCard>
          <WrapperTeacherImage>
            <ProfileImage />
          </WrapperTeacherImage>
          <TeacherName>ธนเดช พัดทอง</TeacherName>
        </TeacherCard>
        <TeacherCard>
          <WrapperTeacherImage>
            <ProfileImage />
          </WrapperTeacherImage>
          <TeacherName>ธนเดช พัดทอง</TeacherName>
        </TeacherCard>
      </WrapperTeachers>
      <ActionTopic name="Strudents">
        <WrapperActionButton>
          <AddCircleButton
            onClick={() => {
              addStrudentsCourseModal.openModal({})
            }}
          />
        </WrapperActionButton>
      </ActionTopic>
      <Authorized requiredRole="strudent">
        <ProgressTable
          students={[
            {
              name: 'ธนเดช พัดทอง',
              code: '07570497',
            },
          ]}
        />
      </Authorized>

      <Authorized requiredRole="teacher">
        <Tabs defaultActiveKey="management">
          <TabPane tab="Management" key="management">
            <Management
              students={[
                {
                  name: 'Thanadej Phadtong',
                  code: '07570497',
                  ip: '192.168.1.1',
                  status: false,
                },
                {
                  name: 'Thanadej Phadtong',
                  code: '07570497',
                  ip: '192.168.1.1',
                  status: false,
                },
              ]}
            />
          </TabPane>
          <TabPane tab="Progressed" key="progressed">
            <Progressed />
          </TabPane>
        </Tabs>
      </Authorized>
      <AddStrudentCourseFormModal />
      <AddTeacherCouseFormModal />
      <StudentProfileModal />
    </Layout>
  )
}
