import React from 'react'
import styled from '@emotion/styled'

import AntdButton from './Antd'

const CircleButton = styled(AntdButton)`
  border-radius: 100%;
`

export default props => <CircleButton {...props} />
