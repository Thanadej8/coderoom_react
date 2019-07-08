import React from 'react'
import { useSelector } from 'react-redux'

import { can } from '@utils/ability'

import StudenView from './components/StudentView'
import TeacherView from './components/TeacherView'

export default props => {
  const currentUser = useSelector(state => state.app.currentUser)
  if (!can(currentUser, 'student')) {
    return <StudenView />
  } else if (can(currentUser, 'teacher')) {
    return <TeacherView />
  }
}
