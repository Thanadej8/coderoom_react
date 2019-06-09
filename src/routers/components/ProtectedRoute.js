import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Page404 from '@components/Page404'
import { isAccessTokenPresent } from '@utils/session'
import { can } from '@utils/ability'
import paths from '@routers/paths'

export default props => {
  const {
    path,
    exact,
    component,
    // permission = {},
    isStatic,
    ignorePermission = false,
  } = props
  const currentUser = useSelector(state => state.app.currentUser)
  // TODO รอพี่มิก
  // const action = Object.keys(permission)[0]
  // const subject = Object.values(permission)[0]
  // if (!isAccessTokenPresent() && !currentUser) return <Redirect to={paths.root()} />
  // if (!can(currentUser, action, subject) && !ignorePermission) return <Page404 />

  return <Route exact={exact} path={path} component={component} static={isStatic} />
}
