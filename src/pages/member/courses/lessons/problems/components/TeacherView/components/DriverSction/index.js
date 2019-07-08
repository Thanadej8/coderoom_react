import React from 'react'
import styled from '@emotion/styled'

import ActionsTopic from '@components/ActionsTopic'
import { AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'
import ActionsCard from '@components/ActionsCard'
import Card from '@components/Card'

import DriverFormModal from './components/DriverFormModal'

const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperDrivers = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  }
`
const DriverCard = styled(Card)`
  border: none;
`

export default props => {
  const driverFormModal = useModalHandlers('driverFormModal')
  const alertModal = useModalHandlers('alertModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Drivers">
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                driverFormModal.openModal({
                  mode: 'create',
                })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperDrivers>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Driver',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <DriverCard>Driver 1</DriverCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Driver',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <DriverCard>Driver 2</DriverCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Driver',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <DriverCard>Driver 3</DriverCard>
        </ActionsCard>
        <ActionsCard
          disableEditButton
          handleDeleteButtonClick={() => {
            alertModal.openModal({
              title: 'Delete Driver',
              render: <p>Are you sure?</p>,
              handleSubmit: () => {},
            })
          }}
        >
          <DriverCard>Driver 4</DriverCard>
        </ActionsCard>
      </WrapperDrivers>
      <DriverFormModal />
    </>
  )
}
