import React from 'react'
import { compose, withHandlers } from 'recompose'

import Inputs from '@components/Inputs'

import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default compose(
  withHandlers({
    handleChange: props => event => {
      const { input } = props
      const value = event.target.rawValue
      input.onChange(value)
    },
    handleBlur: props => event => {
      const { input } = props
      const value = event.target.rawValue
      input.onBlur(value)
    },
  }),
)(props => {
  const {
    placeholder,
    className,
    disabled,
    options,
    input,
    meta: { submitting, touched, error },
    handleChange,
    handleBlur,
    classNameErrorFieldText,
  } = props
  return (
    <WrapperField>
      <Inputs.Cleave
        {...input}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={className}
        disabled={disabled || submitting}
        options={options}
      />
      {touched &&
        (error && <ErrorFieldText className={classNameErrorFieldText}>{error}</ErrorFieldText>)}
    </WrapperField>
  )
})
