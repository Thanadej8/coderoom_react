import React from 'react'
import styled from '@emotion/styled'

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${props => props.theme.media('tablet')} {
    flex-direction: row;
  }
`

export default props => {
  const { className, children } = props
  return <Row className={className}>{children}</Row>
}
