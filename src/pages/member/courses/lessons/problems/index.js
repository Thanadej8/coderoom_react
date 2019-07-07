import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/MemberLayout'
import Card from '@components/Card'
import ActionsCard from '@components/ActionsCard'
import Tabs, { TabPane } from '@components/Tabs'
import { useModalHandlers, useTitlePage } from '@hooks'

import ResourceSection from './components/ResourceSection'
import FileSection from './components/FileSection'
import DriverSection from './components/DriverSction'
import ProblemFormModel from '../components/ProblemFormModel'
import NewInspectionSection from './components/NewInspectionSection'
import SubmissionTestSection from './components/SubmissionTestSection'

const ProblemDetailCard = styled(Card)`
  border: none;
  padding: 10px;
`
const ProblemName = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  color: ${props => props.theme.primaryColor};
`
const ProblemDescription = styled.p`
  color: #969696;
  font-family: ${props => props.theme.minorFont};
  margin-bottom: 10px;
`

const WrapperDetailBoxs = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
  }
`
const DetailBox = styled.div`
  font-size: 14px;
  font-weight: 300;
  padding: 5px 0;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 4px;
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
const WrapperCard = styled.div`
  margin-bottom: 10px;
`
const TabCard = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
`

export default props => {
  useTitlePage('Problem Name')
  const problemFormModal = useModalHandlers('problemFormModal')
  const alertModal = useModalHandlers('alertModal')
  return (
    <Layout>
      <WrapperCard>
        <ActionsCard
          handleEditButtonClick={() => {
            problemFormModal.openModal({
              mode: 'edit',
              problem: { name: '' },
            })
          }}
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Problem',
              render: <p>Are you sure?</p>,
            })
          }}
        >
          <ProblemDetailCard>
            <ProblemName>Labol</ProblemName>
            <ProblemDescription>ฝึกเขียนโปรแกรมรูปแบบ OOP</ProblemDescription>
            <WrapperDetailBoxs>
              <DetailBox>
                <p>Java</p>
                <p>Language</p>
              </DetailBox>
              <DetailBox>
                <p>1 MB</p>
                <p>Memory Limit</p>
              </DetailBox>
              <DetailBox>
                <p>1 s</p>
                <p>Time Limit</p>
              </DetailBox>
              <DetailBox>
                <p>Parse</p>
                <p>Stucture</p>
              </DetailBox>
            </WrapperDetailBoxs>
          </ProblemDetailCard>
        </ActionsCard>
        <Tabs>
          <TabPane tab="Submission test" key="submission_test">
            <TabCard>
              <SubmissionTestSection />
            </TabCard>
          </TabPane>
          <TabPane tab="New inspection" key="new_inspection">
            <TabCard>
              <NewInspectionSection />
            </TabCard>
          </TabPane>
        </Tabs>
      </WrapperCard>

      <ResourceSection />
      <DriverSection />
      <FileSection />
      <ProblemFormModel />
    </Layout>
  )
}
