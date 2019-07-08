import React from 'react'
import styled from '@emotion/styled'

import ActionsTopic from '@components/ActionsTopic'
import { AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'
import ActionsCard from '@components/ActionsCard'
import Card from '@components/Card'

import ResourceFormModal from './components/ResourceFormModel'

const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperResources = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  }
`
const ResourceCard = styled(Card)`
  border: none;
`

export default props => {
  const resourceFormModal = useModalHandlers('resourceFormModal')
  const alertModal = useModalHandlers('alertModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Resources">
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                resourceFormModal.openModal({
                  mode: 'create',
                })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperResources>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Resourse',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <ResourceCard>1. Labol.pdf</ResourceCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Resourse',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <ResourceCard>1. Labol.pdf</ResourceCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Resourse',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <ResourceCard>1. Labol.pdf</ResourceCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Resourse',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <ResourceCard>1. Labol.pdf</ResourceCard>
        </ActionsCard>
      </WrapperResources>
      <ResourceFormModal />
    </>
  )
}
