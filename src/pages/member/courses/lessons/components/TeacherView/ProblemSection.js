import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import ActionsTopic from '@components/ActionsTopic'
import { OvalButton, AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'
import Card from '@components/Card'
import ActionsCard from '@components/ActionsCard'
import { paths } from '@routers'

import ProblemSortFormModal from './components/ProblemSortFomModal'
import ProblemFormModal from './components/ProblemFormModel'

const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperProblems = styled.div`
  display: flex;
  flex-direction: column;
`
const ProblemCard = styled(Card)`
  cursor: pointer;
  color: #000;
`
const WrapperProblem = styled.div`
  margin-bottom: 10px;
`

export default props => {
  const problemSortFormModal = useModalHandlers('problemSortFormModal')
  const problemFormModal = useModalHandlers('problemFormModal')
  const alertModal = useModalHandlers('alertModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Problems">
          <WrapperActionButton>
            <OvalButton
              onClick={() => {
                problemSortFormModal.openModal({
                  mode: 'edit',
                })
              }}
            >
              Sort Problems
            </OvalButton>
          </WrapperActionButton>
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                problemFormModal.openModal({
                  mode: 'create',
                })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperProblems>
        <WrapperProblem>
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
                handleSubmit: () => {},
                // labelSubmit: 'Delete',
                render: <p>Are you Sure?</p>,
              })
            }}
          >
            <Link to={paths.courseProblems({ courseId: 1, lessonId: 1, problemId: 1 })}>
              <ProblemCard>1. Labol</ProblemCard>
            </Link>
          </ActionsCard>
        </WrapperProblem>
        <WrapperProblem>
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
                handleSubmit: () => {},
                // labelSubmit: 'Delete',
                render: <p>Are you Sure?</p>,
              })
            }}
          >
            <Link to={paths.courseProblems({ courseId: 1, lessonId: 1, problemId: 1 })}>
              <ProblemCard>2. Labol</ProblemCard>
            </Link>
          </ActionsCard>
        </WrapperProblem>
        <WrapperProblem>
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
                handleSubmit: () => {},
                // labelSubmit: 'Delete',
                render: <p>Are you Sure?</p>,
              })
            }}
          >
            <Link to={paths.courseProblems({ courseId: 1, lessonId: 1, problemId: 1 })}>
              <ProblemCard>3. Labol</ProblemCard>
            </Link>
          </ActionsCard>
        </WrapperProblem>
        <WrapperProblem>
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
                handleSubmit: () => {},
                // labelSubmit: 'Delete',
                render: <p>Are you Sure?</p>,
              })
            }}
          >
            <Link to={paths.courseProblems({ courseId: 1, lessonId: 1, problemId: 1 })}>
              <ProblemCard>4. Labol</ProblemCard>
            </Link>
          </ActionsCard>
        </WrapperProblem>
      </WrapperProblems>

      <ProblemFormModal />
      <ProblemSortFormModal />
    </>
  )
}
