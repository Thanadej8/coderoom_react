import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import { useTitlePage } from '@hooks'
import Http from '@utils/api'
import FormCard from '@components/FormCard'

import Form from './Form'

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
export default props => {
  useTitlePage('Login')

  const handleSubmit = useCallback(async values => {
    // const response = await Http.get()
    console.log('handleSubmit', values)
  }, [])

  return (
    <Wrapper>
      <FormCard title="Login">
        <Form onSubmit={handleSubmit} />
      </FormCard>
    </Wrapper>
  )
}
