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

export default props => {
  const formName = 'problemSortForm'
  const { isOpen, closeModal, problems } = useModalProps('problemSortFormModal')
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
      title={`Problems Sort`}
      form={formName}
      mode="edit"
      initialValues={{ problems }}
      validate={validate}
      handleSubmit={handleSubmit}
      classFormCard={classFormCard}
    >
      <FormRow>
        <CustomFormCol>
          <Label>problems :</Label>
          <Field
            name="problems"
            component={Fields.SortableTree}
            validate={[isRequired]}
            maxDepth={1}
          />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
