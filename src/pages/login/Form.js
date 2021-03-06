import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { paths } from '@routers'
import { FormRow, FormCol } from '@components/flex'
import Fields from '@components/forms/Fields'
import { isRequired } from '@components/forms/validators'
import { OvalButton } from '@components/buttons'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`
const Label = styled.p`
  margin-bottom: 5px;
`
const WrapperSubmitButton = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
`
const DontAccountText = styled.div`
  color: #969696;
  display: flex;
  justify-content: center;
`

const WrapperForgotPassword = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default reduxForm({ form: 'loginForm' })(props => {
  const { handleSubmit, error, submitting } = props

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <CustomFormCol>
          <Label>Username :</Label>
          <Field
            name="username"
            component={Fields.Text}
            placeholder="Username"
            validate={[isRequired]}
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Password :</Label>
          <Field
            name="password"
            component={Fields.Text}
            placeholder="Password"
            validate={isRequired}
            type="password"
            password
          />
        </CustomFormCol>
      </FormRow>
      <WrapperForgotPassword>
        <Link to={paths.forgotPassword()}>Forgot Password</Link>
      </WrapperForgotPassword>
      <WrapperSubmitButton>
        <OvalButton type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
          Login
        </OvalButton>
      </WrapperSubmitButton>
      <DontAccountText>
        Don’t have account yet? &nbsp;
        <Link to={paths.register()}>Register now</Link>
      </DontAccountText>
    </Form>
  )
})
