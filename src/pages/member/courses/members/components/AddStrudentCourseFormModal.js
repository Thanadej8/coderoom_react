import React, { useCallback, useMemo } from 'react'
import styled from '@emotion/styled'
import { Field, getFormError, isSubmitting } from 'redux-form'
import { useSelector } from 'react-redux'

import { useModalProps } from '@hooks'
import Fields from '@components/forms/Fields'
import { isRequired, requiredFileType } from '@components/forms/validators'
import { FormRow, FormCol } from '@components/flex'
import ReduxFormModal from '@components/ReduxFormModal'

const Label = styled.p`
  margin-bottom: 5px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`

const csvType = requiredFileType('csv', /text\/csv/)

export default props => {
  const formName = 'addStrudentsCourse'
  const { isOpen, closeModal } = useModalProps('addStrudentsCourseModal')
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
      title={`Add Teachers`}
      form={formName}
      mode="create"
      initialValues={{}}
      validate={validate}
      handleSubmit={handleSubmit}
    >
      <FormRow>
        <CustomFormCol>
          <Label>strudents :</Label>
          <Field
            name="strudents"
            type="file"
            component={Fields.FileUploadButton}
            validate={[isRequired, csvType]}
          />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
