import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

const Wrapper = styled(WrapperField)`
  width: auto;
  display: block;
`

export default props => {
  const {
    className,
    disabled,
    input,
    meta: { submitting, touched, error },
  } = props
  const { onBlur, name, value } = input

  const handleChange = useCallback(event => {
    const file = event.target.files[0]
    const type = (file && file.type) || ''
    const regular = /^image\/.+/
    if (file) {
      regular.test(type) && input.onBlur(file)
    }
  })

  return (
    <Wrapper>
      <Inputs.ImagePreviewUpload
        file={value}
        name={name}
        className={className}
        disabled={submitting || disabled}
        onChange={handleChange}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </Wrapper>
  )
}
