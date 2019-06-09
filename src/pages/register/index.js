import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { useTitlePage } from '@hooks'
import Http from '@utils/api'
import FormCard from '@components/FormCard'
import { paths } from '@routers'
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
const WrapperLoginLink = styled.div`
  color: #969696;
  display: flex;
  justify-content: flex-end;
`

export default props => {
  useTitlePage('Register')

  const handleSubmit = useCallback(async values => {
    // const response = await Http.get()
    console.log('handleSubmit', values)
  }, [])
  return (
    <Wrapper>
      <FormCard title="Register">
        <Form onSubmit={handleSubmit} />
        <WrapperLoginLink>
          Do you want to&nbsp;<Link to={paths.root()}>Login ?</Link>
        </WrapperLoginLink>
      </FormCard>
    </Wrapper>
  )
}
