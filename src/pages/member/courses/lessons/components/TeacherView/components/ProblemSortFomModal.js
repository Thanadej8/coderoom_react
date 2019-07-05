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
      initialValues={{}}
      validate={validate}
      handleSubmit={handleSubmit}
    >
      <FormRow>
        <CustomFormCol>
          <Label>problems :</Label>
          <Field
            name="problems"
            component={Fields.Transfer}
            titles={['problems', 'sorted problems']}
            render={item => item.title}
            dataSource={[
              {
                key: '1',
                title: 'Loop 1 ชั้น',
                description: '',
                disabled: false,
              },
              {
                key: '2',
                title: 'Loop 2 ชั้น',
                description: '',
                disabled: false,
              },
              {
                key: '3',
                title: 'Loop 3 ชั้น',
                description: '',
                disabled: false,
              },
              {
                key: '4',
                title: 'Loop 4 ชั้น',
                description: '',
                disabled: false,
              },
              {
                key: '5',
                title: 'Loop 5 ชั้น',
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
