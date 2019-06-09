import React from 'react'
import { Checkbox } from 'antd'

const CheckboxGroup = Checkbox.Group

export default props => {
  const { onChange, options, value, disabled, defaultValue, onBlur } = props

  return (
    <CheckboxGroup
      onChange={onChange}
      onBlur={onBlur}
      options={options}
      value={value}
      disabled={disabled}
      defaultValue={defaultValue}
    />
  )
}
