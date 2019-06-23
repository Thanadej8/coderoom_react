import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Table from '@components/Table'
import { OvalButton } from '@components/buttons'
import { useModalHandlers } from '@hooks'

import StudentName from '../../StudentName'

const WrapperColumn = styled.div`
  display: flex;
  flex-direction: column;
`
const Description = styled.p``
const WrapperButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
const Status = styled.p`
  color: ${props => (props.status ? '' : '')};
`

export default props => {
  const { students } = props
  const alertModal = useModalHandlers('alertModal')

  const columns = useMemo(() => [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '160px',
      align: 'left',
      // fixed: 'left',
      render: (text, record) => {
        const { code } = record
        return <StudentName name={text} code={code} />
      },
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      align: 'center',
      render: (text, record) => {
        return (
          <WrapperColumn>
            <p>{text}</p>
            <WrapperButton>
              <OvalButton
                onClick={() => {
                  alertModal.openModal({
                    title: 'Drop IP',
                    render: <Description>Are you sure? Drop this ip</Description>,
                    handleSubmit: () => {},
                  })
                }}
                type="danger"
              >
                Drop IP
              </OvalButton>
            </WrapperButton>
          </WrapperColumn>
        )
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      render: (text, record) => {
        return (
          <WrapperColumn>
            <p>{text ? 'ACTIVE' : 'INACTIVE'}</p>
            <WrapperButton>
              <OvalButton
                onClick={() => {
                  alertModal.openModal({
                    title: 'Change Status',
                    render: <Description>Are you sure? Change status</Description>,
                    handleSubmit: () => {},
                  })
                }}
                type="danger"
              >
                {text ? 'INACTIVE' : 'ACTIVE'}
              </OvalButton>
            </WrapperButton>
          </WrapperColumn>
        )
      },
    },
  ])

  const dataSource = useMemo(() =>
    students
      ? students.map((student, index) => ({ key: `${student.name}_${index}`, ...student }))
      : [],
  )

  return (
    <>
      <Table columns={columns} dataSource={dataSource} bordered />
    </>
  )
}
