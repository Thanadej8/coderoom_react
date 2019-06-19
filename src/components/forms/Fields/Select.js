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
    options,
    formatter,
    isClearable,
    isLoading,
    isOptionDisabled,
  } = props
  const { onChange, onBlur } = input
  const handleChange = useCallback(option => {
    const isObject = option instanceof Object
    const value = isObject ? option.value : ''
    onChange(value)
  })
  const handleBlur = useCallback(() => {
    onBlur()
  })

  return (
    <WrapperField>
      <Inputs.Select
        {...input}
        options={options}
        formatter={formatter}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={className}
        disabled={disabled || submitting}
        isClearable={isClearable}
        isLoading={isLoading}
        isOptionDisabled={isOptionDisabled}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
