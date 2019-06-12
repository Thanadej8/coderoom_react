import React from 'react'
import styled from '@emotion/styled'
import { reduxForm, Field } from 'redux-form'

import Fields from '@components/forms/Fields'
import { FormRow, FormCol } from '@components/flex'
import { OvalButton } from '@components/buttons'

import { isRequired, isEmail, isSilpakornEmail } from '@components/forms/validators'

const Card = styled.div`
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`
const Label = styled.p`
  margin-bottom: 5px;
`

const Container = styled.div`
  width: 500px;
`
const Form = styled.form`
  padding: 10px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`

const validate = values => {
  let error = {}
  if (values.password && values.confirmPassword && values.password !== values.confirmPassword) {
    error.confirmPassword = '*confirm password is not equal password'
  }
  return error
}

const EditProfileForm = reduxForm({ form: 'editProfile', validate })(props => {
  const { handleSubmit, error, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <CustomFormCol>
          <Label>Name :</Label>
          <Field name="name" component={Fields.Text} placeholder="Firstname Lastname" />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Password :</Label>
          <Field
            name="password"
            component={Fields.Text}
            placeholder="Password"
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
            type="password"
            password
          />
        </CustomFormCol>
      </FormRow>
      <WrapperButton>
        <OvalButton type="primary" htmlType="submit" disabled={submitting}>
          Submit
        </OvalButton>
      </WrapperButton>
    </Form>
  )
})

export default props => (
  <Card>
    <Container>
      <EditProfileForm />
      {/* <EditProfileForm initialValues={} onSubmit={handleSubmit}/> */}
    </Container>
  </Card>
)
