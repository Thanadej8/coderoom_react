import React from 'react'
import styled from '@emotion/styled'

import AntdButton from './Antd'

const OvalButton = styled(AntdButton)`
  border-radius: 30px;
  width: 120px;
`

export default props => <OvalButton {...props} />
