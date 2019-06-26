import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Table from '@components/Table'
import Icon from '@components/Icon'

const Card = styled.div`
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
`
const WrapperTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
`
const SumaryResult = styled.h3`
  font-weight: 400;
  color: ${props => props.theme.primaryColor};
`
const WrapperIcon = styled.div`
  display: flex;
  flex-direction: column;
`
const TimesIcon = styled(Icon)`
  color: #f88485;
`
const CheckIcon = styled(Icon)`
  color: #3eebc1;
`

export default props => {
  const columns = useMemo(() => {
    return [
      {
        title: '1',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <WrapperIcon>
              <CheckIcon name="check" />
              <p>-</p>
            </WrapperIcon>
          )
        },
      },
      {
        title: '2',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <WrapperIcon>
              <TimesIcon name="times" />
              <p>-</p>
            </WrapperIcon>
          )
        },
      },
      {
        title: '3',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <WrapperIcon>
              <TimesIcon name="times" />
              <p>-</p>
            </WrapperIcon>
          )
        },
      },
      {
        title: '4',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <WrapperIcon>
              <TimesIcon name="times" />
              <p>-</p>
            </WrapperIcon>
          )
        },
      },
      {
        title: '5',
        dataIndex: '',
        align: 'center',
        render: (text, record) => {
          return (
            <WrapperIcon>
              <TimesIcon name="times" />
              <p>-</p>
            </WrapperIcon>
          )
        },
      },
    ]
  })
  return (
    <Card>
      <WrapperTitle>
        <Title>Test Cases</Title>
        <SumaryResult>1 / 2 Correct</SumaryResult>
      </WrapperTitle>
      <Table columns={columns} dataSource={[{ 1: true, 2: false }]} pagination={false} />
    </Card>
  )
}
