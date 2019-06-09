import React, { useState, useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import InputCleave from 'cleave.js/react'

const Input = styled(InputCleave)`
  width: 100%;
  height: 32px;
  background-color: #ffffff;
  color: #000;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-family: ${props => props.theme.defaultFont};
  font-size: 14px;
  padding: 10px;
  :disabled {
    opacity: 0.5;
  }
  :hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  :focus {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default props => {
  const [cleaveObj, setCleaveObj] = useState(null)
  const {
    name,
    value,
    onChange,
    onBlur,
    onFocus,
    placeholder,
    className,
    disabled,
    options,
  } = props

  const onInit = useCallback(cleave => {
    setCleaveObj(cleave)
  })

  useEffect(
    () => {
      cleaveObj && cleaveObj.setRawValue(value)
    },
    [value],
  )

  return (
    <Wrapper>
      <Input
        name={name}
        value={value}
        onInit={onInit}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        options={options}
      />
    </Wrapper>
  )
}
