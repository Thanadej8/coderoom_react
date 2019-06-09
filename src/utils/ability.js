import { useSelector } from 'react-redux'

export const can = (currentUser, requestAction, requestSubject) => {
  // TODO รอพี่มิก ว่า  ให้แนบ permission ผ่าน current user
  // if (!currentUser || !requestAction || !requestSubject) return false
  // const { permissions } = currentUser
  // if (!permissions) return false
  // const findPermission = permissions.find(
  //   permission =>
  //     (permission.actions === requestAction || permission.actions === 'manage') &&
  //     permission.subjects === requestSubject,
  // )
  // if (findPermission) return true
  return true
}

export const Authorized = props => {
  const { action, subject, children } = props
  const currentUser = useSelector(state => state.app.currentUser)
  if (can(currentUser, action, subject)) {
    return children
  } else {
    return null
  }
}
