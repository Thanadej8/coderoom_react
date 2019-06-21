import React, { useCallback } from 'react'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    className,
    disabled,
    input,
    meta: { submitting, touched, error },
  } = props

  const { onChange, onBlur, value } = input
  const handleChange = useCallback((content, delta, source, editor) => {
    onBlur(content)
  })

  return (
    <WrapperField>
      <Inputs.QuillEditor onChange={handleChange} value={value} disabled={submitting || disabled} />
      {touched && error && <ErrorFieldText>{error}</ErrorFieldText>}
    </WrapperField>
  )
}
