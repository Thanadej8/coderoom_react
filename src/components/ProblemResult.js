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
  margin-bottom: 15px;
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
const WrapperTable = styled.div`
  margin-bottom: 10px;
`
const WrapperStuctureResult = styled.div`
  display: flex;
  flex-direction: column;
  /* display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px 10px;
  margin-bottom: 10px;
  ${props => props.theme.media('tablet')} {
    grid-template-columns: calc(33.3% - 10px) calc(33.3% - 10px) calc(33.3% - 10px);
  }
  ${props => props.theme.media('large-tablet')} {
  } */
`
const FieldCard = styled.div`
  background-color: #f1f1f1;
  /* border-bottom: 1px solid #969696; */
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* align-items: center; */
  /* align-content: center; */
  &:nth-last-of-type(1) {
    margin-bottom: 0;
  }
`
const FieldTitle = styled.h4`
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
`
const FieldResultPoint = styled.p`
  /* font-size: px; */
  display: flex;
  align-content: center;
  align-items: center;
`
const PointText = styled.span`
  color: #969696;
  margin-left: 5px;
`
const ErrorText = styled.p``

export default props => {
  const columns = useMemo(() => {
    return [
      {
        title: '#',
        dataIndex: 'id',
        width: '50px',
        align: 'center',
      },
      {
        title: 'Output',
        dataIndex: 'output',
        align: 'center',
        width: '100px',
        render: (text, record) => {
          return (
            <WrapperIcon>
              {text ? <CheckIcon name="check" /> : <TimesIcon name="times" />}
            </WrapperIcon>
          )
        },
      },

      {
        title: 'Issues',
        dataIndex: 'issues',
        align: 'center',
        render: (text, record) => {
          return <ErrorText>{text}</ErrorText>
        },
      },
    ]
  })
  return (
    <Card>
      <WrapperTitle>
        <Title>Test Case</Title>
        <SumaryResult>1 / 2 Correct</SumaryResult>
      </WrapperTitle>
      <WrapperTable>
        <Table
          columns={columns}
          dataSource={[
            { id: 1, output: true, issues: '' },
            { id: 2, output: false, issues: 'Time Limit exceeded' },
            { id: 3, output: true, issues: '' },
            { id: 4, output: true, issues: '' },
            { id: 5, output: true, issues: '' },
            { id: 6, output: true, issues: '' },
            { id: 7, output: true, issues: '' },
            { id: 8, output: true, issues: '' },
            { id: 9, output: true, issues: '' },
            { id: 10, output: true, issues: '' },
            { id: 11, output: true, issues: '' },
            { id: 12, output: true, issues: '' },
            { id: 13, output: true, issues: '' },
          ]}
          // pagination={false}
          bordered
          // scroll={{ x: '150%' }}
        />
      </WrapperTable>
      <WrapperTitle>
        <Title>Stucture</Title>
        <SumaryResult>160 / 320 Point</SumaryResult>
      </WrapperTitle>
      <WrapperStuctureResult>
        <FieldCard>
          <FieldTitle>Class</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Package</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Inner Class</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Extends</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Implements</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Constructor</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Attibute</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
        <FieldCard>
          <FieldTitle>Method</FieldTitle>
          <FieldResultPoint>
            20 / 40 <PointText>Point</PointText>
          </FieldResultPoint>
        </FieldCard>
      </WrapperStuctureResult>
    </Card>
  )
}
