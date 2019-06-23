import React, { useState, useCallback } from 'react'
import styled from '@emotion/styled'

import Inputs from '@components/Inputs'

import ProgressTable from '../../ProgressTable'
import LessonDetail from './LessonDetail'
import ProblemDetail from './ProblemDetail'

const stateOptions = [
  {
    label: 'Main',
    value: 'main',
  },
  {
    label: 'Lesson Detail',
    value: 'lesson_detail',
  },
  {
    label: 'Problem Detail',
    value: 'problem_detail',
  },
]
const WrapperState = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
`

const StateText = styled.p``

const StateSelect = styled(Inputs.Select)`
  width: 150px;
  margin-left: 5px;
`

export default props => {
  const [state, setState] = useState(stateOptions[0].value)

  const handleStateChange = useCallback(option => {
    const { value } = option
    setState(value)
  })

  return (
    <>
      <WrapperState>
        <StateText>State : </StateText>
        <StateSelect
          onChange={handleStateChange}
          options={stateOptions}
          defaultValue={stateOptions[0]}
          placeholder="State name"
        />
      </WrapperState>
      {state === 'main' && (
        <ProgressTable
          students={[
            {
              name: 'ธนเดช พัดทอง',
              code: '07570497',
            },
          ]}
        />
      )}
      {state === 'lesson_detail' && <LessonDetail />}
      {state === 'problem_detail' && <ProblemDetail />}
    </>
  )
}
