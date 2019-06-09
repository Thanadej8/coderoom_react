import React from 'react'
import styled from '@emotion/styled'

import Col from './Col'

const FormCol = styled(Col)`
  display: flex;
  ${props => props.theme.media('tablet')} {
    flex-direction: column;
  }
`

export default FormCol
