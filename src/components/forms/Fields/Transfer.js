import React, { useCallback, useMemo } from 'react'

import Inputs from '@components/Inputs'

import { WrapperField, ErrorFieldText } from '../StyleComponents'

export default props => {
  const {
    placeholder,
    className,
    disabled,
    input,
    meta: { submitting, touched, error },
    dataSource,
  } = props
  const { onBlur } = input

  const handleChange = useCallback((nextTargetKeys, direction, moveKeys) => {
    onBlur(nextTargetKeys)
  })

  return (
    <WrapperField>
      <Inputs.Transfer
        {...props}
        className={className}
        dataSource={dataSource}
        disabled={submitting || disabled}
        onChange={handleChange}
        targetKeys={input.value === '' ? [] : input.value}
      />
      {touched && (error && <ErrorFieldText>{error}</ErrorFieldText>)}
    </WrapperField>
  )
}
