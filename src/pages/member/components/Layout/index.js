import React from 'react'
import styled from '@emotion/styled'

import Header from './Header'
import PageContainer from '../PageContainer'
import Breadcrumb from './Breadcrumb'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Body = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-top: 70px;
  ${props => props.theme.media('tablet')} {
    padding: 20px;
    padding-top: 80px;
  }
`

export default props => {
  const { children } = props
  return (
    <Wrapper>
      <Header />
      <Body>
        <Breadcrumb />
        {children}
      </Body>
    </Wrapper>
  )
}
