import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    placeholder,
    disabled,
    input,
    meta: { submitting, touched, error },
    autosize,
    defaultValue,
  } = props
  const { onChange, onBlur } = input

  const handleChange = useCallback(event => onChange(event.target.value))
  const handleBlur = useCallback(event => onBlur(event.target.value))

  return (
    <WrapperField>
      <Inputs.TextArea
        {...input}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled || submitting}
        autosize={autosize}
        defaultValue={defaultValue}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
