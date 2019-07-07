import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Table from '@components/Table'
import Inputs from '@components/Inputs'

import StudentName from '../../StudentName'

const WrapperLessonSelects = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`
const LessonSelect = styled(Inputs.Select)`
  width: 200px;
  margin-left: 10px;
`
const WrapperSelect = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`

export default props => {
  const columns = useMemo(() => {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        width: '160px',
        align: 'left',
        fixed: 'left',
        render: (text, record) => {
          const { code, id } = record
          return <StudentName name={text} code={code} />
        },
      },
      {
        title: 'Problem Name',
        width: '10%',
        children: [
          {
            title: 'Structure',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
          {
            title: 'Outputs',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
        ],
      },
      {
        title: 'Problem Name',
        width: '10%',
        children: [
          {
            title: 'Structure',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
          {
            title: 'Outputs',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
        ],
      },
      {
        title: 'Problem Name',
        width: '10%',
        children: [
          {
            title: 'Structure',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
          {
            title: 'Outputs',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
        ],
      },
      {
        title: 'Problem Name',
        width: '10%',
        children: [
          {
            title: 'Structure',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
          {
            title: 'Outputs',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
        ],
      },
      {
        title: 'Summary',
        width: '10%',
        children: [
          {
            title: 'Structure',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
          {
            title: 'Outputs',
            dataIndex: '',
            align: 'center',
            // width: '50px',
            render: (text, record) => {
              return <p>500 / 500</p>
            },
          },
        ],
      },
    ]
  })

  const x = useMemo(() => {
    const width = window.innerWidth
    const lessonCount = 9

    if (width < 768) {
      return `${lessonCount * 100}%`
    } else if (width < 1024) {
      return `${lessonCount * 20}%`
    } else {
      return `${lessonCount * 20}%`
    }
  })

  return (
    <>
      <WrapperLessonSelects>
        <WrapperSelect>
          <p>Lesson : </p>
          <LessonSelect placeholder="Lesson name" />
        </WrapperSelect>
      </WrapperLessonSelects>
      <Table
        dataSource={[
          {
            id: 1,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 2,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 3,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 4,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 5,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 6,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
          {
            id: 7,
            name: 'Thanadej Phadtong',
            code: '07570497',
          },
        ]}
        columns={columns}
        bordered
        scroll={{ x }}
      />
    </>
  )
}
