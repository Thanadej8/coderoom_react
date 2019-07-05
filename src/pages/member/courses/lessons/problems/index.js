import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/MemberLayout'
import Card from '@components/Card'
import ActionsTopic from '@components/ActionsTopic'
import { AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'

const ProblemDetailCard = styled(Card)`
  border: none;
`
const ProblemName = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
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
    /* flex-direction: row; */
    grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
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
const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`

export default props => {
  // const problemFormModal = useModalHandlers('problemFormModal')
  return (
    <Layout>
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
      <WrapperActionTopic>
        <ActionsTopic name="Problems">
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                // problemFormModal.openModal({
                //   mode: 'create',
                // })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
    </Layout>
  )
}
