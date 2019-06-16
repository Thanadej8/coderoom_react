import React from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from '@emotion/styled'

import { OvalButton } from '@components/buttons'
import { isRequired, fitString } from '@components/forms/validators'
import Fields from '@components/forms/Fields'

const Form = styled.div``
const Label = styled.p`
  margin-bottom: 5px;
`
const WrapperSubmitButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`

const fitCodeCourse = fitString(6)

export default reduxForm({ form: 'courseJoinForm' })(props => {
  const { handleSubmit, error, submitting } = props

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Course Code :</Label>
      <Field
        name="courseCode"
        component={Fields.Cleave}
        placeholder="Course Code"
        validate={[isRequired, fitCodeCourse]}
        options={{ blocks: [6] }}
      />
      <WrapperSubmitButton>
        <OvalButton type="primary" htmlType="submit" loading={submitting} disabled={submitting}>
          Join
        </OvalButton>
      </WrapperSubmitButton>
    </Form>
  )
})
