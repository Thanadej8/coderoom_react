import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const Code = styled.h3`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 10px;
`
const Description = styled.p`
  font-size: 16px;
`

export default () => (
  <Wrapper>
    <Code>404</Code>
    <Description>Page not found</Description>
  </Wrapper>
)
