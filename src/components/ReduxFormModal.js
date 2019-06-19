import React from 'react'
import styled from '@emotion/styled'
import { reduxForm } from 'redux-form'

import { FormModal } from '@components/modals'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const ReduxForm = reduxForm()(props => {
  const { handleSubmit, children } = props
  return <Form onSubmit={handleSubmit}>{children}</Form>
})

export default props => {
  const {
    initialValues,
    isOpen,
    closeModal,
    handleSubmit,
    mode,
    title,
    validate,
    form,
    children,
  } = props

  return (
    <FormModal isOpen={isOpen} closeModal={closeModal} title={title}>
      {mode === 'edit' && initialValues && Object.keys(initialValues).length !== 0 && (
        <ReduxForm
          onSubmit={handleSubmit}
          initialValues={{ ...initialValues }}
          form={form}
          validate={validate}
        >
          {children}
        </ReduxForm>
      )}
      {mode === 'create' && (
        <ReduxForm form={form} onSubmit={handleSubmit} validate={validate}>
          {children}
        </ReduxForm>
      )}
    </FormModal>
  )
}
