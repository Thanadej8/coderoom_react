import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    maxDepth,
    className,
    treeData,
    disabled,
    input,
    meta: { submitting, touched, error },
  } = props
  const { onBlur, value } = input

  const handleChange = useCallback(newTreeData => {
    console.log('useCallback', newTreeData)
    // onBlur()
  })

  console.log('value', value)

  return (
    <WrapperField>
      <Inputs.SortableTree
        // {...input}
        onChange={handleChange}
        className={className}
        canDrag={disabled || submitting}
        treeData={value}
        maxDepth={maxDepth}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
