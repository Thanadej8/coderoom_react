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
  const formName = 'problemForm'
  const { isOpen, closeModal, problem, mode = 'edit' } = useModalProps('problemFormModal')
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
      title={`${mode === 'create' ? 'Add' : 'Edit'} Problem`}
      form={formName}
      mode={mode}
      initialValues={{ ...problem }}
      validate={validate}
      handleSubmit={mode === 'create' ? handleSubmitAddForm : handleSubmitEditForm}
    >
      <FormRow>
        <CustomFormCol>
          <Label>name :</Label>
          <Field name="name" component={Fields.Text} placeholder="Name" validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Description :</Label>
          <Field
            name="description"
            component={Fields.TextArea}
            placeholder="Description"
            validate={[isRequired]}
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Time Limit (s) :</Label>
          <Field
            name="timeLimit"
            component={Fields.Cleave}
            placeholder="Time Limit"
            validate={[isRequired]}
            options={{ numericOnly: true }}
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Memory Limit (MB) :</Label>
          <Field
            name="memoryLimit"
            component={Fields.Cleave}
            placeholder="Memory Limit"
            validate={[isRequired]}
            options={{ numericOnly: true }}
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Language :</Label>
          <Field
            name="language"
            component={Fields.Select}
            placeholder="Language"
            options={languageOptions}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Stucture :</Label>
          <Field
            name="stucture"
            component={Fields.Select}
            placeholder="Stucture"
            options={stuctureOptions}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>Select File :</Label>
          <Field name="file" component={Fields.FileUploadButton} validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
