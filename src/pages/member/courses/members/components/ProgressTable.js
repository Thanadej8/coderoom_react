import React, { useMemo } from 'react'
import styled from '@emotion/styled'

import Table from '@components/Table'
import { useModalHandlers } from '@hooks'
import StudentName from './StudentName'

const ProgressPersen = styled.p`
  text-align: center;
  color: ${props => props.theme.primaryColor};
`
const CustomStudentName = styled(StudentName)`
  cursor: pointer;
`

export default props => {
  const { students } = props
  const studentProfileModal = useModalHandlers('studentProfileModal')
  const columns = useMemo(() => [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '160px',
      align: 'left',
      fixed: 'left',
      render: (text, record) => {
        const { code, id } = record
        return (
          <CustomStudentName
            name={text}
            code={code}
            onClick={() => {
              studentProfileModal.openModal({
                id,
              })
            }}
          />
        )
      },
    },
    {
      title: 'Progress Course',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>10%</ProgressPersen>
      },
    },
    {
      title: 'Lesson One',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>20%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Two',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>30%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
    {
      title: 'Lesson Three',
      dataIndex: '',
      // width: '10%',
      align: 'center',
      render: (text, record) => {
        return <ProgressPersen>40%</ProgressPersen>
      },
    },
  ])

  const dataSource = useMemo(() =>
    students
      ? students.map((student, index) => ({ key: `${student.name}_${index}`, ...student }))
      : [],
  )
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

  return <Table columns={columns} dataSource={dataSource} bordered scroll={{ x }} />
}
