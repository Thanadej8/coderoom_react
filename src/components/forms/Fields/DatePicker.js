import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'
import { dateFormat } from '@utils/helpers'

import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    placeholder,
    className,
    disabled,
    input,
    meta: { submitting, touched, error },
    minDate,
    maxDate,
  } = props
  const { onChange, onBlur } = input

  const handleChange = useCallback(moment => {
    const newDate = moment ? moment.toISOString() : null
    onChange(newDate)
  })

  const handleBlur = useCallback(moment => {
    const newDate = moment ? moment.toISOString() : null
    onBlur(newDate)
  })

  return (
    <WrapperField>
      <Inputs.DatePicker
        {...input}
        onChange={handleChange}
        onBlur={handleBlur}
        format={dateFormat}
        className={className}
        placeholder={placeholder}
        disabled={disabled || submitting}
        minDate={minDate}
        maxDate={maxDate}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
