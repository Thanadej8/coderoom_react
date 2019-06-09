import React from 'react'
import styled from '@emotion/styled'

import { Input } from 'antd'

const Wrapper = styled.div`
  width: 100%;
  .ant-input {
    color: #000;
  }
`

export default props => {
  const {
    type = 'text',
    value,
    disabled,
    onChange,
    password = false,
    onBlur,
    placeholder,
    className,
  } = props
  if (password)
    return (
      <Wrapper className={className}>
        <Input.Password
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Wrapper>
    )
  return (
    <Wrapper className={className}>
      <Input
        className={className}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Wrapper>
  )
}
