import React from 'react'
import styled from '@emotion/styled'

const WrapperStudent = styled.div`
  display: flex;
  flex-direction: column;
`
const Code = styled.p`
  color: #dde1e3;
`
const Name = styled.p`
  /* font-size: 16px; */
`

export default props => {
  const { name, code, onClick, className } = props

  return (
    <WrapperStudent onClick={onClick} className={className}>
      <Code>{code}</Code>
      <Name>{name}</Name>
    </WrapperStudent>
  )
}
