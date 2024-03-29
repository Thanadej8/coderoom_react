import React from 'react'
import styled from '@emotion/styled'
import { Button as AntdButton } from 'antd'

const Button = styled(AntdButton)``

export default props => {
  const { type, disabled, htmlType, onClick, children, loading, className } = props
  // type primary, dashed, danger, default
  return (
    <Button
      type={type}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      loading={loading}
      className={className}
    >
      {children}
    </Button>
  )
}
