import React from 'react'
import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'

const Button = styled(AntdButton)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  i {
    display: flex;
    font-size: 12px;
  }
`

export default props => {
  const { type, disabled, htmlType, onClick, children, loading, className, htmlFor } = props
  // type primary, dashed, danger, default
  return (
    <Button
      type={type}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      loading={loading}
      className={className}
      htmlFor={htmlFor}
    >
      {children}
    </Button>
  )
}
