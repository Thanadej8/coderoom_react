import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from '@emotion/styled'

import { FormRow, FormCol } from '@components/flex'
import Fields from '@components/forms/Fields'
import {
  isRequired,
  minString,
  isEmail,
  fitString,
  isSilpakornEmail,
} from '@components/forms/validators'
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
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
`

const fitStudentCode = fitString(8)

const validate = values => {
  let error = {}
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    error.confirmPassword = '*confirm password is not equal password'
  }
  return error
}

export default reduxForm({ form: 'registerForm', validate })(props => {
  const { handleSubmit, error, submitting } = props

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <CustomFormCol>
          <Label>email :</Label>
          <Field
            name="email"
            component={Fields.Text}
            placeholder="Only silpakorn email"
            validate={[isRequired, isEmail, isSilpakornEmail]}
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
      <FormRow>
        <CustomFormCol>
          <Label>Confirm Password :</Label>
          <Field
            name="confirmPassword"
            component={Fields.Text}
            placeholder="Confirm Password"
            validate={isRequired}
            type="password"
            password
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Student Code :</Label>
          <Field
            name="student_code"
            component={Fields.Cleave}
            placeholder="Student Code"
            validate={[isRequired, fitStudentCode]}
            options={{ blocks: [8] }}
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Name :</Label>
          <Field
            name="name"
            component={Fields.Text}
            placeholder="Firstname Lastname"
            validate={[isRequired]}
          />
        </CustomFormCol>
      </FormRow>

      <WrapperSubmitButton>
        <OvalButton type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
          Register
        </OvalButton>
      </WrapperSubmitButton>
    </Form>
  )
})
