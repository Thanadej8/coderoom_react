import React from 'react'
import styled from '@emotion/styled'
import userImage from '@assets/images/user.svg'

const Wrapper = styled.div`
  border: 1px dashed #dde1e3;
  border-radius: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  margin: auto;
`

export default props => {
  const { src, className } = props
  return (
    <Wrapper>
      <ProfileImage src={src || userImage} className={className} />
    </Wrapper>
  )
}
