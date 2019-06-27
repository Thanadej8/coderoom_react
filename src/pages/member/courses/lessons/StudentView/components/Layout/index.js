import React from 'react'
import styled from '@emotion/styled'

import Header from './Header'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled.div`
  /* position: relative; */
  padding-top: 60px;
  width: 100%;
  height: 100%;
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
