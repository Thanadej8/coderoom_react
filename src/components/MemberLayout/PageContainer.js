import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  ${props => props.theme.media('computer')} {
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`
const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  ${props => props.theme.media('tablet')} {
    padding: 0 20px;
  }
  ${props => props.theme.media('computer')} {
    width: 1024px;
    padding: 0;
  }
`

export default props => {
  const { children, className } = props
  return (
    <Wrapper>
      <Container className={className}>{children}</Container>
    </Wrapper>
  )
}
