import React from 'react'
import styled from '@emotion/styled'
import SortableTree from 'react-sortable-tree'

const Sortable = styled(SortableTree)`
  height: 300px !important;
`

export default props => {
  const { treeData, onChange, maxDepth, canDrag = true, canDrop = true } = props
  console.log('props', props)
  return (
    <Sortable
      maxDepth={maxDepth}
      treeData={treeData}
      onChange={onChange}
      // canDrag={canDrag}
      // canDrop={canDrop}
    />
  )
}
