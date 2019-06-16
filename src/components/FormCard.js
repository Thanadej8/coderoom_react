import React from 'react'
import styled from '@emotion/styled'

import PageTitle from '@components/PageTitle'

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

const TitlePage = styled(PageTitle)`
  font-size: 32px;
  font-weight: 300;
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
