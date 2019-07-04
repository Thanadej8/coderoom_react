import React, { useMemo } from 'react'
import { reduxForm, Field } from 'redux-form'
import styled from '@emotion/styled'

import { AlertModal } from '@components/modals'
import { useModalProps } from '@hooks'
import Fields from '@components/forms/Fields'
import { FormRow, FormCol } from '@components/flex'
import { isRequired } from '@components/forms/validators'
import { OvalButton } from '@components/buttons'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.p`
  margin-bottom: 5px;
`
const WrapperSubmitButton = styled.div`
  display: flex;
  justify-content: flex-end;
`
const DeleteText = styled.p`
  text-align: center;
`

const FileReduxForm = reduxForm({ form: 'fileForm' })(props => {
  const { handleSubmit, error, submitting } = props

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <FormCol>
          <Label>Name :</Label>
          <Field name="name" component={Fields.Text} placeholder="Name" validate={[isRequired]} />
        </FormCol>
      </FormRow>
      <WrapperSubmitButton>
        <OvalButton htmlType="submit" type="primary">
          Submit
        </OvalButton>
      </WrapperSubmitButton>
    </Form>
  )
})

export default props => {
  const { isOpen, closeModal, handleSubmit, mode } = useModalProps('actionFileAlertModal')
  const title = useMemo(() => {
    switch (mode) {
      case 'create':
        return 'Create file'
      case 'edit':
        return 'Edit filename'
      case 'delete':
        return 'Delete file'
      default:
        return ''
    }
  }, [mode])
  return (
    <AlertModal
      isOpen={isOpen}
      closeModal={closeModal}
      handleSubmit={handleSubmit}
      title={title}
      disabledButton={mode === 'create' || mode === 'edit'}
    >
      {mode === 'create' && <FileReduxForm onSubmit={handleSubmit} />}
      {mode === 'edit' && <FileReduxForm onSubmit={handleSubmit} initialValues={{}} />}
      {mode === 'delete' && <DeleteText>Are you sure?</DeleteText>}
    </AlertModal>
  )
}
