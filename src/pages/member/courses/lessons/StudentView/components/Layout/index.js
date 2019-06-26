import React from 'react'
import styled from '@emotion/styled'

import Header from './Header'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  padding-top: 60px;
  width: 100%;
  height: calc(100% - 60px);
`

export default props => {
  const { children } = props
  return (
    <Wrapper>
      <Header />
      <Body>{children}</Body>
    </Wrapper>
  )
}
