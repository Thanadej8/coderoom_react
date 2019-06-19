import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

import { paths } from '@routers'
import ActionsTopic from '@components/ActionsTopic'
import ActionsCard from '@components/ActionsCard'
import LessonCard from '@components/LessonCard'
import { OvalButton, AddCircleButton } from '@components/buttons'

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
  return (
    <>
      <WrapperActionTopic>
        <ActionsTopic name="Lessons">
          <WrapperActionButton>
            <OvalButton>Sort Lessons</OvalButton>
          </WrapperActionButton>
          <WrapperActionButton>
            <AddCircleButton />
          </WrapperActionButton>
        </ActionsTopic>
      </WrapperActionTopic>
      <WrapperCards>
        {lessons &&
          lessons.length !== 0 &&
          lessons.map((lesson, index) => {
            return (
              <ActionsCard
                key={`${lessons.name}_${index}`}
                handleEditButtonClick={() => {}}
                handleDeleteButtonClick={() => {}}
              >
                <Link to={paths.courseLessons({ courseId: 1, lessonId: lesson.id })}>
                  <LessonCard {...lesson} />
                </Link>
              </ActionsCard>
            )
          })}
      </WrapperCards>
    </>
  )
}
