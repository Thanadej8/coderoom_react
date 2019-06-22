import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`
const Input = styled.input`
  display: none;
`
const Label = styled.label`
  width: 65px;
  height: 45px;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  cursor: ${props => (props.disabled ? 'no-drop' : 'pointer')};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const FileName = styled.p`
  margin: 0;
  padding-left: 10px;
  max-width: 250px;
  word-wrap: break-word;
`

export default props => {
  const {
    className,
    type,
    accept,
    disabled,
    onChange,
    name,
    value,
    planceholder = 'ยังไม่มีไฟล์',
    classNameFileName,
  } = props
  // genarate uuid มาใส่ id เพื่อลดการซ้ำ
  const fileName = (value && value.name) || planceholder
  return (
    <Wrapper>
      <Input id={name} type={type} accept={accept} onChange={onChange} />
      <Label htmlFor={name} className={className} disabled={disabled}>
        เลือกไฟล์
      </Label>
      <FileName className={classNameFileName}>{fileName}</FileName>
    </Wrapper>
  )
}
