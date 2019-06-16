import React from 'react'
import styled from '@emotion/styled'

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
  background-color: #dde1e3;
`
const Progress = styled.div`
  position: absolute;
  width: ${props => props.width}px;
  max-width: ${props => props.width}px;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${props => props.theme.primaryColor};
`

export default props => {
  const { name = '', percent = 50 } = props

  return (
    <Wrapper>
      <Header>
        <Text>Progress {name}</Text>
        <Text>{percent}%</Text>
      </Header>
      <ProgressBar>
        <Progress width={percent} />
      </ProgressBar>
    </Wrapper>
  )
}
