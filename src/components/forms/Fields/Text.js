import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    placeholder,
    className,
    disabled,
    input,
    meta: { submitting, touched, error },
    type,
    password,
  } = props
  const { onChange, onBlur } = input

  const handleChange = useCallback(event => onChange(event.target.value))
  const handleBlur = useCallback(event => onBlur(event.target.value))

  return (
    <WrapperField>
      <Inputs.Text
        {...input}
        password={password}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        className={className}
        placeholder={placeholder}
        disabled={disabled || submitting}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
