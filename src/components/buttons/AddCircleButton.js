import React from 'react'
import styled from '@emotion/styled'

import { CircleButton } from '@components/buttons'
import Icon from '@components/Icon'

const AddCircleButton = styled(CircleButton)`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0;
  i {
    display: flex;
    font-size: 12px;
  }
  ${props => props.theme.media('tablet')} {
    width: 45px;
    height: 45px;
    i {
      font-size: 14px;
    }
  }
`

export default props => (
  <AddCircleButton type="primary" {...props}>
    <Icon name="plus" />
  </AddCircleButton>
)
