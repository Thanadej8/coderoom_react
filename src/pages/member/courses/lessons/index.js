import React from 'react'
import { useSelector } from 'react-redux'

import { can } from '@utils/ability'

import StudentView from './components/StudentView'
import TeacherView from './components/TeacherView'

export default props => {
  const currentUser = useSelector(state => state.app.currentUser)

  if (can(currentUser, 'student')) {
    return <StudentView {...props} />
  } else {
    return <TeacherView {...props} />
  }
}
