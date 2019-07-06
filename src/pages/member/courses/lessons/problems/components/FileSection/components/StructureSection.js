import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
  margin-bottom: 10px;
`

export default props => {
  return <Title>Structure</Title>
}
