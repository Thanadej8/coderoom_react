import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styled from '@emotion/styled'

import Fields from '@components/forms/Fields'
import { isRequired } from '@components/forms/validators'
import { OvalButton } from '@components/buttons'

const Form = styled.form`
  display: flex;
  justify-content: center;
`
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 500px;
`

export default reduxForm({ form: 'problemTest' })(props => {
  const { handleSubmit, error, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Field
          name="file"
          component={Fields.FileUploadButton}
          validate={[isRequired]}
          type="file"
          accept=""
        />
        <WrapperButton>
          <OvalButton htmlType="submit" disabled={submitting}>
            Submit
          </OvalButton>
        </WrapperButton>
      </Container>
    </Form>
  )
})
