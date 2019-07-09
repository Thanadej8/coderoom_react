import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import ActionsTopic from '@components/ActionsTopic'
import { OvalButton, AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'
import Card from '@components/Card'
import ActionsCard from '@components/ActionsCard'
import { paths } from '@routers'

import ProblemSortFormModal from './ProblemSortFomModal'
import ProblemFormModal from './ProblemFormModel'

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
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 100%;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
`
const ProblemCard = styled(Card)`
  cursor: pointer;
  color: #000;
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
                  problems: [
                    {
                      title: '`title`',
                      subtitle: '`subtitle`',
                      expanded: true,
                      children: [
                        {
                          title: 'Child Node',
                          subtitle: 'Defined in `children` array belonging to parent',
                        },
                        {
                          title: 'Nested structure is rendered virtually',
                          subtitle: (
                            <span>
                              The tree uses&nbsp;
                              <a href="https://github.com/bvaughn/react-virtualized">
                                react-virtualized
                              </a>
                              &nbsp;and the relationship lines are more of a visual trick.
                            </span>
                          ),
                        },
                      ],
                    },
                    {
                      expanded: true,
                      title: 'Any node can be the parent or child of any other node',
                      children: [
                        {
                          expanded: true,
                          title: 'Chicken',
                          children: [{ title: 'Egg' }],
                        },
                      ],
                    },
                    {
                      title: 'Button(s) can be added to the node',
                      subtitle:
                        'Node info is passed when generating so you can use it in your onClick handler',
                    },
                    {
                      title: 'Show node children by setting `expanded`',
                      subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
                      children: [
                        {
                          title: 'Bruce',
                          subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
                          children: [{ title: 'Bruce Jr.' }, { title: 'Brucette' }],
                        },
                      ],
                    },
                    {
                      title: 'Advanced',
                      subtitle: 'Settings, behavior, etc.',
                      children: [
                        {
                          title: (
                            <div>
                              <div
                                style={{
                                  backgroundColor: 'gray',
                                  display: 'inline-block',
                                  borderRadius: 10,
                                  color: '#FFF',
                                  padding: '0 5px',
                                }}
                              >
                                Any Component
                              </div>
                              &nbsp;can be used for `title`
                            </div>
                          ),
                        },
                        {
                          title: 'Disable dragging on a per-node basis with the `canDrag` prop',
                          subtitle: 'Or set it to false to disable all dragging.',
                          noDragging: true,
                        },
                        {
                          title: 'You cannot give this children',
                          subtitle:
                            'Dropping is prevented via the `canDrop` API using `nextParent`',
                          noChildren: true,
                        },
                        {
                          title:
                            'When node contents are really long, it will cause a horizontal scrollbar' +
                            ' to appear. Deeply nested elements will also trigger the scrollbar.',
                        },
                      ],
                    },
                  ],
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
      </WrapperProblems>

      <ProblemFormModal />
      <ProblemSortFormModal />
    </>
  )
}
