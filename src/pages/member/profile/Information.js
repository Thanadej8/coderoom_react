import React from 'react'
import styled from '@emotion/styled'

import StudnetProfile from '@components/StudnetProfile'

const Card = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`

export default props => (
  <Card>
    <StudnetProfile />
  </Card>
)
