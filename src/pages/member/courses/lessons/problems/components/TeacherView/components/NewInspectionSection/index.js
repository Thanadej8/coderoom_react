import React from 'react'
import styled from '@emotion/styled'

import { OvalButton } from '@components/buttons'

const Title = styled.p`
  font-size: 20px;
  text-align: center;
  color: #000;
  margin-bottom: 5px;
`
const Description = styled.p`
  text-align: center;
  color: #969696;
  font-family: ${props => props.theme.minorFont};
  margin-bottom: 10px;
`
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
`

export default props => {
  return (
    <>
      <Title>ตรวจสอบไฟล์ Input & Output</Title>
      <Description>เมื่อกดปุ่ม ระบบจะทำการตรวจสอบไฟล์ in & sol</Description>
      <WrapperButton>
        <OvalButton type="danger">Submit</OvalButton>
      </WrapperButton>
    </>
  )
}
