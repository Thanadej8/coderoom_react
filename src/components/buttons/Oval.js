import React from 'react'
import styled from '@emotion/styled'

import AntdButton from './Antd'

const Button = styled(AntdButton)`
  border-radius: 30px;
  width: 120px;
`

export default props => {
  const { children, onClick, disabled, type, className, htmlType, loading } = props
  return (
    <Button
      type={type}
      htmlType={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={className}
      loading={loading}
    >
      {children}
    </Button>
  )
}
