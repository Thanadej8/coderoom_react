import { useSelector } from 'react-redux'

export const can = (currentUser, requiredRole) => {
  // TODO
  // if (requiredRole !== currentUser.role) return false
  return true
}

export const Authorized = props => {
  const { requiredRole, children } = props
  const currentUser = useSelector(state => state.app.currentUser)
  if (can(currentUser, requiredRole)) {
    return children
  } else {
    return null
  }
}
