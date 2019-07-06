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

const languageOptions = [{ label: 'Java', value: 'java' }]
const stuctureOptions = [{ label: 'Parse', value: 'true' }, { label: 'None Parse', value: 'false' }]

export default props => {
  const formName = 'resourceForm'
  const { isOpen, closeModal, resource, mode = 'edit' } = useModalProps('resourceFormModal')
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
      title={`${mode === 'create' ? 'Add' : 'Edit'} Resource`}
      form={formName}
      mode={mode}
      initialValues={{ ...resource }}
      validate={validate}
      handleSubmit={mode === 'create' ? handleSubmitAddForm : handleSubmitEditForm}
    >
      <FormRow>
        <CustomFormCol>
          <Label>Select File :</Label>
          <Field name="file" component={Fields.FileUploadButton} validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
