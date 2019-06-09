import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import Http from '@utils/api'
import Form from './Form'
import { TitlePage } from '../components/StyleComponents'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  ${props => props.theme.media('tablet')} {
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`
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

export default props => {
  const handleSubmit = useCallback(async values => {
    // const response = await Http.get()
    console.log('handleSubmit', values)
  }, [])

  return (
    <Wrapper>
      <Card>
        <TitlePage>Login</TitlePage>
        <Form onSubmit={handleSubmit} />
      </Card>
    </Wrapper>
  )
}
