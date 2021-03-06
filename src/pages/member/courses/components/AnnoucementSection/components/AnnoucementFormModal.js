import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { Field, getFormError, isSubmitting } from 'redux-form'
import { useSelector } from 'react-redux'
import { css } from 'emotion'

import { useModalProps } from '@hooks'
import Fields from '@components/forms/Fields'
import { isRequired } from '@components/forms/validators'
import { FormRow, FormCol } from '@components/flex'
import ReduxFormModal from '@components/ReduxFormModal'

const classFormCard = css`
  @media (min-width: 768px) {
    width: 700px !important;
  }
`

const Label = styled.p`
  margin-bottom: 5px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`

const priorityOptions = [{ label: 'Normal', value: 1 }, { label: 'Express', value: 2 }]
const statusOptions = [{ label: 'Show', value: 'true' }, { label: 'Hide', value: 'false' }]

export default props => {
  const formName = 'annoucementForm'
  const { isOpen, closeModal, annoucement, mode = 'edit' } = useModalProps('annoucmentFormModal')
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
      title={`${mode === 'create' ? 'Add' : 'Edit'} Annoucement`}
      form={formName}
      mode={mode}
      initialValues={{ ...annoucement }}
      validate={validate}
      handleSubmit={mode === 'create' ? handleSubmitAddForm : handleSubmitEditForm}
      classFormCard={classFormCard}
    >
      <FormRow>
        <CustomFormCol>
          <Label>title :</Label>
          <Field name="Title" component={Fields.Text} placeholder="Title" validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>priority :</Label>
          <Field
            name="priority"
            component={Fields.Select}
            placeholder="Priority"
            options={priorityOptions}
            validate={[isRequired]}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>status :</Label>
          <Field
            name="status"
            component={Fields.Select}
            placeholder="Status"
            options={statusOptions}
            validate={[isRequired]}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>content :</Label>
          <Field name="content" component={Fields.QuillEditor} placeholder="Content" />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
