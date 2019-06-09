import React from 'react'
import styled from '@emotion/styled'

const Col = styled.div`
  flex: 1;

  ${props => props.theme.media('tablet')} {
    flex: ${props => props.flex || 1};
  }
  ${props => props.theme.media('computer')} {
    flex: ${props => props.flex || 1};
  }
`

export default props => {
  const { className, children } = props
  return (
    <Col className={className} {...props}>
      {children}
    </Col>
  )
}
