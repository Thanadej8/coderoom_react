import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'

const GhostBar = styled.div`
  width: 18px;
  height: 100%;
  background-color: #f1f1f1;
  opacity: 1;
  cursor: col-resize;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const TextGhostBar = styled.p`
  transform: rotate(270deg);
  color: #000;
`

export default props => {
  const handleResetLayout = useCallback(event => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const viewSection = document.getElementById('problem_view_section')
    const editorSection = document.getElementById('problem_editor_section')
    viewSection.style.width = 50 + '%'
    editorSection.style.width = 50 + '%'
    ghostBarElement.style.left = 50 + '%'
  })

  const drag = useCallback(event => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const viewSection = document.getElementById('problem_view_section')
    const editorSection = document.getElementById('problem_editor_section')
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges()
    const percentage = (event.pageX / window.innerWidth) * 100
    viewSection.style.width = percentage + '%'
    editorSection.style.width = 100 - percentage + '%'
    ghostBarElement.style.left = percentage + '%'
  })

  useEffect(() => {
    const ghostBarElement = document.getElementById('ghost_bar')
    const wrapperSectionElement = document.getElementById('wrapper_section')
    ghostBarElement.addEventListener('mousedown', () => {
      wrapperSectionElement.addEventListener('mousemove', drag)
    })
    ghostBarElement.addEventListener('mouseup', () => {
      wrapperSectionElement.removeEventListener('mousemove', drag)
    })
    ghostBarElement.addEventListener('dblclick', handleResetLayout)
    return () => {
      ghostBarElement.removeEventListener('mousedown', () => {
        wrapperSectionElement.removeEventListener('mousemove', drag)
      })
      ghostBarElement.removeEventListener('mouseup', () => {
        wrapperSectionElement.removeEventListener('mousemove', drag)
      })
      ghostBarElement.removeEventListener('dblclick', handleResetLayout)
    }
  })

  return (
    <GhostBar id="ghost_bar" ondblclick={handleResetLayout}>
      <TextGhostBar>SCOLLER</TextGhostBar>
    </GhostBar>
  )
}
