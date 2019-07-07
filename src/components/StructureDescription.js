import React from 'react'
import styled from '@emotion/styled'
import { Descriptions } from 'antd'

const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  .ant-descriptions-title {
    margin-bottom: 10px;
  }
`

export default props => {
  const { tpye, point } = props
  return (
    <Wrapper>
      <Descriptions
        title={
          <WrapperTitle>
            <p>{tpye}</p>
            <p>{point} Point</p>
          </WrapperTitle>
        }
        bordered
        size="small"
      >
        <Descriptions.Item label="Name">Book</Descriptions.Item>
        <Descriptions.Item label="Access modifier">-</Descriptions.Item>
        <Descriptions.Item label="Data type">-</Descriptions.Item>
        <Descriptions.Item label="Return type">-</Descriptions.Item>
        <Descriptions.Item label="Parameters">-</Descriptions.Item>
        <Descriptions.Item label="Loop">-</Descriptions.Item>
        <Descriptions.Item label="Recursive">-</Descriptions.Item>
      </Descriptions>
    </Wrapper>
  )
}
