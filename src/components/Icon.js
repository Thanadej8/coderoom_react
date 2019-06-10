import React from 'react'
import styled from '@emotion/styled'

const Icon = styled.i`
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'default')};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export default props => {
  const { name, className, onClick, disabled } = props
  return <Icon className={`icon-${name} ${className}`} onClick={onClick} disabled={disabled} />
}
