import React from 'react'
import { Input } from 'antd'

export default props => {
  const { autosize, defaultValue, value, disabled, onChange, onBlur, placeholder } = props
  return (
    <Input.TextArea
      autosize={autosize}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
    />
  )
}
