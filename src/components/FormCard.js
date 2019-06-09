import React from 'react'
import styled from '@emotion/styled'

const Card = styled.div`
  width: 100%;
  padding: 20px 15px;

  background-color: #fff;
  ${props => props.theme.media('tablet')} {
    width: 500px;
    padding: 30px 50px;

    justify-content: center;
    align-content: center;
    align-items: center;
  }
`

const TitlePage = styled.h2`
  font-size: 32px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`

export default props => {
  const { children, title } = props
  return (
    <Card>
      <TitlePage>{title}</TitlePage>
      {children}
    </Card>
  )
}
