import React from 'react'
import { useSelector } from 'react-redux'

import { can } from '@utils/ability'

import StudentView from './StudentView'
import TeacherView from './TeacherView'

export default props => {
  const currentUser = useSelector(state => state.app.currentUser)

  if (can(currentUser, 'teacher')) {
    return <TeacherView {...props} />
  } else {
    return <StudentView {...props} />
  }
}
