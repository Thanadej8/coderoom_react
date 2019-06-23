import React, { useMemo, useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Icon from '@components/Icon'
import ProfileImage from '@components/ProfileImage'

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`
const Input = styled.input`
  display: none;
`
const AddButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: #1890ff;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  pointer-events: ${props => (props.disabled ? 'none' : '')};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? '0.8' : '1')};
`
const PlusIcon = styled(Icon)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
`

const readUrl = (file, setBase64) => {
  if (file instanceof File) {
    const reader = new FileReader()

    reader.onload = e => {
      setBase64(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}

export default props => {
  const [base64, setBase64] = useState(null)
  const { name, className, disabled, onChange, file } = props

  useEffect(() => {
    readUrl(file, setBase64)
  })

  return (
    <Wrapper>
      <Input id={name} type="file" accept="image/*" onChange={onChange} />
      <ProfileImage src={base64} />
      <AddButton htmlFor={name} disabled={disabled}>
        <PlusIcon name="plus" />
      </AddButton>
    </Wrapper>
  )
}
