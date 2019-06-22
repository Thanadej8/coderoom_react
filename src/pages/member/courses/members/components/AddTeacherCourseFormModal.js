import React, { useCallback, useMemo } from 'react'
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
  const formName = 'addTeacherCouseForm'
  const { isOpen, closeModal, teachers } = useModalProps('addTeacherCouseFormModal')
  const validate = values => {
    let error = {}

    return error
  }

  const handleSubmit = useCallback(async values => {})

  const dataSource = useMemo(() => teachers)
  const targetKeys = ['1']

  const formError = useSelector(state => getFormError(formName)(state))
  const submitting = useSelector(state => isSubmitting(formName)(state))
  return (
    <ReduxFormModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`Add Teachers`}
      form={formName}
      mode="edit"
      initialValues={{
        teachers: targetKeys,
      }}
      validate={validate}
      handleSubmit={handleSubmit}
    >
      <FormRow>
        <CustomFormCol>
          <Label>teachers :</Label>
          <Field
            name="teachers"
            component={Fields.Transfer}
            titles={['all teacher', 'teachers']}
            render={item => item.title}
            dataSource={[
              {
                key: '1',
                title: 'ธนเดช พัดทอง',
                description: '',
                disabled: false,
              },
              {
                key: '2',
                title: 'ธนเดช พัดทอง',
                description: '',
                disabled: false,
              },
              {
                key: '3',
                title: 'ธนเดช พัดทอง',
                description: '',
                disabled: false,
              },
              {
                key: '4',
                title: 'ธนเดช พัดทอง',
                description: '',
                disabled: false,
              },
              {
                key: '5',
                title: 'ธนเดช พัดทอง',
                description: '',
                disabled: false,
              },
            ]}
            validate={[isRequired]}
          />
        </CustomFormCol>
      </FormRow>
    </ReduxFormModal>
  )
}
