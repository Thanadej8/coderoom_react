import React from 'react'
import styled from '@emotion/styled'

import Loader from '@components/Loader'
import logoCPSU from '@assets/images/cpsu.svg'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const Logo = styled.img`
  height: 90px;
  margin-bottom: 30px;
  ${props => props.theme.media('tablet')} {
    height: 100px;
  }
  ${props => props.theme.media('large-tablet')} {
    height: 110px;
  }
`

export default () => (
  <Wrapper>
    <Logo src={logoCPSU} />
    <Loader />
  </Wrapper>
)
