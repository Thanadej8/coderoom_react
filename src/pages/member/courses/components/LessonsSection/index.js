import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { paths } from '@routers'
import ActionsTopic from '@components/ActionsTopic'
import ActionsCard from '@components/ActionsCard'
import LessonCard from '@components/LessonCard'
import { OvalButton, AddCircleButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'

import LessonFormModal from './components/LessonFormModel'
import LessonSortFormModal from './components/LessonSortFomModal'

const WrapperActionTopic = styled.div`
  margin: 10px 0;
`
const WrapperActionButton = styled.div`
  margin: 0 5px;
  &:nth-last-of-type(1) {
    margin: 0;
  }
`
const WrapperCards = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(50% - 10px) calc(50% - 10px);
  }
`

export default props => {
  const lessons = [
    { id: 1, name: 'การใช้ TreeMap, HashMap', mode: 'Learning', progress: 50 },
    { id: 1, name: 'การใช้ TreeMap, HashMap', mode: 'Learning', progress: 50 },
    { id: 1, name: 'การใช้ TreeMap, HashMap', mode: 'Learning', progress: 50 },
  ]
  const lessonFormModal = useModalHandlers('lessonFormModal')
  const lessonSortFormModal = useModalHandlers('lessonSortFormModal')
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Lessons">
          <WrapperActionButton>
            <OvalButton
              onClick={() => {
                lessonSortFormModal.openModal({
                  mode: 'edit',
                  lessons: [
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
              Sort Lessons
            </OvalButton>
          </WrapperActionButton>
          <WrapperActionButton>
            <AddCircleButton
              onClick={() => {
                lessonFormModal.openModal({
                  mode: 'create',
                })
              }}
            />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperCards>
        {lessons &&
          lessons.length !== 0 &&
          lessons.map((lesson, index) => {
            const alertModel = useModalHandlers('alertModal')
            return (
              <ActionsCard
                key={`${lessons.name}_${index}`}
                handleEditButtonClick={() => {
                  lessonFormModal.openModal({
                    mode: 'edit',
                    lesson,
                  })
                }}
                handleDeleteButtonClick={() => {
                  alertModel.openModal({
                    title: 'Delete Lesson',
                    handleSubmit: () => {},
                    // labelSubmit: 'Delete',
                    render: <p>Are you Sure?</p>,
                  })
                }}
              >
                <Link to={paths.courseLessons({ courseId: 1, lessonId: lesson.id })}>
                  <LessonCard {...lesson} />
                </Link>
              </ActionsCard>
            )
          })}
      </WrapperCards>
      <LessonSortFormModal />
      <LessonFormModal />
    </>
  )
}
