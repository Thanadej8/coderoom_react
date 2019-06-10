import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProtectedRoute, PageLoadable, paths } from '@routers'
import Page404 from '@components/Page404'

const AsyncMemberDashboardPage = PageLoadable({ loader: () => import('@pages/member/dashboard') })
const AsyncMemberProfilePage = PageLoadable({ loader: () => import('@pages/member/profile') })

export default props => (
  <Switch>
    <ProtectedRoute
      exact
      path={[paths.member(), paths.memberDashboard()]}
      component={AsyncMemberDashboardPage}
    />
    <ProtectedRoute exact path={paths.memberProfile()} component={AsyncMemberProfilePage} />
    <Route component={Page404} />
  </Switch>
)
