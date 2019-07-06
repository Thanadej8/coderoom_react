import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { Field, getFormError, isSubmitting } from 'redux-form'
import { useSelector } from 'react-redux'

import { useModalProps } from '@hooks'
import Fields from '@components/forms/Fields'
import { isRequired } from '@components/forms/validators'
import { FormRow, FormCol } from '@components/flex'
import ReduxFormModal from '@components/ReduxFormModal'

const Label = styled.p`
  margin-bottom: 5px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`
export default props => {
  const formName = 'driverForm'
  const { isOpen, closeModal, problem, mode = 'edit' } = useModalProps('driverFormModal')
  const validate = values => {
    let error = {}

    return error
  }

  const handleSubmitAddForm = useCallback(async values => {})
  const handleSubmitEditForm = useCallback(async values => {})

  const formError = useSelector(state => getFormError(formName)(state))
  const submitting = useSelector(state => isSubmitting(formName)(state))
  return (
    <ReduxFormModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`${mode === 'create' ? 'Add' : 'Edit'} Driver`}
      form={formName}
      mode={mode}
      initialValues={{ ...problem }}
      validate={validate}
      handleSubmit={mode === 'create' ? handleSubmitAddForm : handleSubmitEditForm}
    >
      <FormRow>
        <CustomFormCol>
          <Label>Select Driver File :</Label>
          <Field name="driver" component={Fields.FileUploadButton} validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
