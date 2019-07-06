import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  padding: 15px;
`

export default props => {
  const { children, className } = props
  return <Card className={className}>{children}</Card>
}
