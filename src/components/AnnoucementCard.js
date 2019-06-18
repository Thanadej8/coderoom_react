import React from 'react'
import styled from '@emotion/styled'
import moment from 'moment'

const Wrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`
const CreatedAt = styled.p`
  font-weight: 200;
`
const Title = styled.p`
  font-size: 16px;
`

export default props => {
  const { title, onClick, className } = props
  const createdAt = moment().locale('th')
  const createdAtFormat = createdAt.format('lll')

  return (
    <Wrapper onClick={onClick} className={className}>
      <CreatedAt>{createdAtFormat} น.</CreatedAt>
      <Title>{title}</Title>
    </Wrapper>
  )
}
