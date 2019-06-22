import React, { useCallback } from 'react'
import styled from '@emotion/styled'

import Inputs from '@components/Inputs'
import { WrapperField, ErrorFieldText } from '../StyleComponents'

const ButtonInput = styled(Inputs.FileUploadButton)`
  background-color: #000;
  color: #fff;
`

export default props => {
  const {
    className,
    classNameFileName,
    disabled,
    input,
    meta: { submitting, touched, error },
    type,
    accept,
    planceholder,
    regular,
  } = props

  const handleChange = useCallback(event => {
    const { input } = props
    const file = event.target.files[0]
    const type = (file && file.type) || ''
    if (file) {
      if (!regular) {
        input.onBlur(file)
        return
      }
      regular.test(type) && input.onBlur(file)
    }
  })

  return (
    <WrapperField>
      <ButtonInput
        {...input}
        onChange={handleChange}
        className={className}
        classNameFileName={classNameFileName}
        planceholder={planceholder}
        type={type}
        accept={accept}
        disabled={disabled || submitting}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
