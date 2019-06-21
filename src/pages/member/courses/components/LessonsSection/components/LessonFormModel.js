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

const Label = styled.p`
  margin-bottom: 5px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`

const modeOptions = [{ label: 'Learing', value: 'learing' }, { label: 'Exam', value: 'exam' }]
const guildOptions = [{ label: 'Suggest', value: 'true' }, { label: 'Unsuggest', value: 'false' }]
const submitOptions = [{ label: 'Allow', value: 'true' }, { label: 'Disallow', value: 'false' }]

export default props => {
  const formName = 'lessonForm'
  const { isOpen, closeModal, lesson, mode = 'edit' } = useModalProps('lessonFormModal')
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
      title={`${mode === 'create' ? 'Add' : 'Edit'} Lesson`}
      form={formName}
      mode={mode}
      initialValues={{ ...lesson }}
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
          <Label>mode :</Label>
          <Field
            name="mode"
            component={Fields.Select}
            placeholder="Mode"
            options={modeOptions}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>guild :</Label>
          <Field
            name="guild"
            component={Fields.Select}
            placeholder="Guild"
            options={guildOptions}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
      <FormRow>
        <CustomFormCol>
          <Label>submit :</Label>
          <Field
            name="submit"
            component={Fields.Select}
            placeholder="Submit"
            options={submitOptions}
            isClearable
          />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
