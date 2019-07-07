import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'

const widthProgress = props => keyframes`
  from {
    width: 0;
  }
  to {
  width: ${props.width};
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  align-items: flex-end;
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 200;
`
const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  background-color: #f1f1f1;
  border-radius: 25px;
`
const Progress = styled.div`
  border-radius: 25px;
  position: absolute;
  width: ${props => props.width}%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.primaryColor};
  animation-name: ${widthProgress};
  animation-duration: 1s;
`

export default props => {
  const { name = '', percent = 0, className } = props

  return (
    <Wrapper className={className}>
      <Header>
        <Text>{name} Progress</Text>
        <Text>{percent}%</Text>
      </Header>
      <ProgressBar>
        <Progress width={percent} />
      </ProgressBar>
    </Wrapper>
  )
}
