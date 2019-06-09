import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'

import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    disabled,
    input,
    meta: { submitting, touched, error },
    options,
  } = props
  const { onChange, onBlur, value } = input

  const handleChange = useCallback(options => {
    onChange(options)
  })
  const handleBlur = useCallback(options => {
    onBlur()
  })
  return (
    <WrapperField>
      <Inputs.CheckBoxGroup
        value={value === '' ? [] : value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={submitting || disabled}
        options={options}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
