import React from 'react'
import styled from '@emotion/styled'

import { Authorized } from '@utils/ability'

const Wrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;

  ${props => props.theme.media('tablet')} {
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
`

const TopicName = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
`
const WrapperActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  ${props => props.theme.media('tablet')} {
  }
`

export default props => {
  const { name, children } = props

  return (
    <Wrapper>
      <TopicName>{name}</TopicName>
      <Authorized requiredRole="teacher">
        <WrapperActions>{children}</WrapperActions>
      </Authorized>
    </Wrapper>
  )
}
