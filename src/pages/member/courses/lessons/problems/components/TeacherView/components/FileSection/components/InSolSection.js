import React from 'react'
import styled from '@emotion/styled'

import ActionsTopic from '@components/ActionsTopic'
import { OvalButton, AddCircleButton } from '@components/buttons'
import Card from '@components/Card'
import ActionsCard from '@components/ActionsCard'
import { useModalHandlers } from '@hooks'

const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperInSols = styled.div`
  padding: 0 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: calc(50% - 5px) calc(50% - 5px);
`
const WrapperIns = styled.div``
const WrapperSols = styled.div``

const WrapperCard = styled.div`
  margin-bottom: 10px;
`

export default props => {
  const alertModal = useModalHandlers('alertModal')
  return (
    <>
      <ActionsTopic name="Input & Output">
        <WrapperActionButton>
          <OvalButton
            type="danger"
            onClick={() => {
              alertModal.openModal({
                title: 'Destory all in and sol',
                render: <p>Are you sure?</p>,
                handleSubmit: () => {},
              })
            }}
          >
            Destory all
          </OvalButton>
        </WrapperActionButton>
        <WrapperActionButton>
          <AddCircleButton onClick={() => {}} />
        </WrapperActionButton>
      </ActionsTopic>
      <WrapperInSols>
        <WrapperIns>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>1.in</Card>
            </ActionsCard>
          </WrapperCard>

          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>2.in</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>3.in</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>4.in</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>5.in</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>6.in</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>7.in</Card>
            </ActionsCard>
          </WrapperCard>
        </WrapperIns>
        <WrapperSols>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>1.sol</Card>
            </ActionsCard>
          </WrapperCard>

          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>2.sol</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>3.sol</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>4.sol</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>5.sol</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>6.sol</Card>
            </ActionsCard>
          </WrapperCard>
          <WrapperCard>
            <ActionsCard
              disableEditButton
              handleDeleteButtonClick={() => {
                alertModal.openModal({
                  title: 'Delete 1.in',
                  render: <p>Are you sure?</p>,
                  handleSubmit: () => {},
                })
              }}
            >
              <Card>7.sol</Card>
            </ActionsCard>
          </WrapperCard>
        </WrapperSols>
      </WrapperInSols>
    </>
  )
}
