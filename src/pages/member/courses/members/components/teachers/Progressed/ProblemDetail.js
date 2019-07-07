import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Table from '@components/Table'
import Inputs from '@components/Inputs'
import Icons from '@components/Icon'

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
  &:nth-last-of-type(1) {
    margin-left: 10px;
  }
`

const TimesIcon = styled(Icons)`
  color: #f88485;
`
const CheckIcon = styled(Icons)`
  color: #3eebc1;
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
        title: 'Stucture',
        children: [
          {
            title: 'Class',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Package',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Inner Class',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Extends',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Implements',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Constructor',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Attribute',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Method',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
          {
            title: 'Summary',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>10 / 10</p>
            },
          },
        ],
      },
      {
        title: 'Outputs',
        children: [
          {
            title: '1',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <TimesIcon name="times" />
            },
          },
          {
            title: '2',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <CheckIcon name="check" />
            },
          },
          {
            title: '3',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <TimesIcon name="times" />
            },
          },
          {
            title: '4',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <CheckIcon name="check" />
            },
          },
          {
            title: '5',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <TimesIcon name="times" />
            },
          },
          {
            title: 'Summary',
            dataIndex: '',
            align: 'center',
            render: (text, record) => {
              return <p>2 / 6</p>
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
        <WrapperSelect>
          <p>Problem : </p>
          <LessonSelect placeholder="Problem name" />
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
