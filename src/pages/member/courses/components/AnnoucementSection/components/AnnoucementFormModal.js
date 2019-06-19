import React from 'react'
import styled from '@emotion/styled'
import { reduxForm, Field, getFormError, isSubmitting } from 'redux-form'
import { useStore, useSelector } from 'react-redux'

import { FormModal } from '@components/modals'
import { useModalProps } from '@hooks'
import Fields from '@components/forms/Fields'
import { isRequired } from '@components/forms/validators'
import { FormRow, FormCol } from '@components/flex'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.p`
  margin-bottom: 5px;
`
const CustomFormCol = styled(FormCol)`
  flex-direction: column;
`

const ReduxForm = reduxForm()(props => {
  const { handleSubmit, error, submitting, children } = props
  return (
    <Form onSubmit={handleSubmit}>
      {children}
      <FormRow>
        <CustomFormCol>
          <Label>title :</Label>
          <Field name="title" component={Fields.Text} placeholder="Title" validate={[isRequired]} />
        </CustomFormCol>
      </FormRow>
    </Form>
  )
})

export default props => {
  const { isOpen, closeModal, annoucement, handleSubmit, mode = 'edit' } = useModalProps(
    'annoucmentFormModal',
  )
  const validate = values => {
    let error = { title: 'ต้องไม่เว้นว่างนะจ๊ะ', _error: 'ไม่บอก' }
    return error
  }
  const formError = useSelector(state => getFormError('annoucmentForm')(state))
  const submitting = useSelector(state => isSubmitting('annoucmentForm')(state))
  console.log('formError', formError)
  console.log('submitting', submitting)

  return (
    <FormModal
      isOpen={isOpen}
      closeModal={closeModal}
      title={`${mode === 'edit' ? 'Edit' : 'Add'} Annoucement`}
    >
      {mode === 'edit' && annoucement && Object.keys(annoucement).length !== 0 && (
        <ReduxForm
          onSubmit={handleSubmit}
          initialValues={{ ...annoucement }}
          form="annoucmentForm"
          validate={validate}
        >
          testestsfsfsdfsfsfsfs
        </ReduxForm>
      )}
      {mode === 'create' && <ReduxForm onSubmit={handleSubmit} />}
    </FormModal>
  )
}
