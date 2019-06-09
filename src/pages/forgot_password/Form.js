import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from '@emotion/styled'

import { FormRow, FormCol } from '@components/flex'
import Fields from '@components/forms/Fields'
import { isRequired, isEmail, isSilpakornEmail } from '@components/forms/validators'
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

export default reduxForm({ form: 'forgotPasswordForm' })(props => {
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
      <WrapperSubmitButton>
        <OvalButton type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
          Submit
        </OvalButton>
      </WrapperSubmitButton>
    </Form>
  )
})
