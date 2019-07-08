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
  const formName = 'lessonSortForm'
  const { isOpen, closeModal, lessons } = useModalProps('lessonSortFormModal')
  const validate = values => {
    let error = {}

    return error
  }

  const handleSubmit = useCallback(async values => {})

  const formError = useSelector(state => getFormError(formName)(state))
  const submitting = useSelector(state => isSubmitting(formName)(state))
  return (
    <ReduxFormModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`Lessons Sort`}
      form={formName}
      mode="edit"
      initialValues={{
        lessons,
      }}
      validate={validate}
      handleSubmit={handleSubmit}
    >
      <FormRow>
        <CustomFormCol>
          <Label>lessons :</Label>
          <Field
            name="lessons"
            component={Fields.SortableTree}
            validate={[isRequired]}
            maxDepth={5}
          />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
