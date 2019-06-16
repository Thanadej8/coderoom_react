import { useSelector } from 'react-redux'

export const can = (currentUser, requiredRole) => {
  const { role } = currentUser
  if (requiredRole !== role) return false
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
