import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/MemberLayout'
import { useTitlePage, useModalHandlers } from '@hooks'
import LessonCard from '@components/LessonCard'
import Tabs, { TabPane } from '@components/Tabs'
import ActionsCard from '@components/ActionsCard'
import { Row, Col } from '@components/flex'
import Inputs from '@components/Inputs'

import LessonFormModal from '../../../components/LessonsSection/components/LessonFormModel'
import ProblemSection from './ProblemSection'

const TabCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
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
  useTitlePage('Lessons Name')
  const lessonFormModal = useModalHandlers('lessonFormModal')
  const lessonDeleteAlertModel = useModalHandlers('alertModal')

  return (
    <Layout>
      <ActionsCard
        handleEditButtonClick={() => {
          lessonFormModal.openModal({
            mode: 'edit',
            lesson: { name: '' },
          })
        }}
        handleDeleteButtonClick={() => {
          lessonDeleteAlertModel.openModal({
            title: 'Delete Lesson',
            handleSubmit: () => {},
            // labelSubmit: 'Delete',
            render: <p>Are you Sure?</p>,
          })
        }}
      >
        <LessonCard mode="Learning" name="การใช้ TreeMap, HashMap" progress={50} />
      </ActionsCard>
      <Tabs defaultActiveKey="settings">
        <TabPane tab="Settings" key="settings">
          <TabCard>
            <ManagementRow>
              <ManagementCol>Load Resources</ManagementCol>
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
              <ManagementCol>Guild</ManagementCol>
              <ManagementCol>
                <WrapperSelect>
                  <Inputs.Select
                    defaultValue={{ label: 'Suggest', value: 'true' }}
                    options={[
                      { label: 'Suggest', value: 'true' },
                      { label: 'Unsuggest', value: 'false' },
                    ]}
                  />
                </WrapperSelect>
              </ManagementCol>
            </ManagementRow>
            <ManagementRow>
              <ManagementCol>Submisstion</ManagementCol>
              <ManagementCol>
                <WrapperSelect>
                  <Inputs.Select
                    defaultValue={{ label: 'Allow', value: 'true' }}
                    options={[
                      { label: 'Allow', value: 'true' },
                      { label: 'Disallow', value: 'false' },
                    ]}
                  />
                </WrapperSelect>
              </ManagementCol>
            </ManagementRow>
          </TabCard>
        </TabPane>
      </Tabs>
      <ProblemSection />
      <LessonFormModal />
    </Layout>
  )
}
